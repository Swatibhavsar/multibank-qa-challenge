export class ExplorePage {

    locators = {
        spotMarketSection: 'section[class*="bg-dark"]',
        spotMarketTitle: 'h2:contains("Spot market")',
        tradingTable: 'table',
        tradingTableRows: 'table tbody tr',
        categoryTabs: '[role="group"][aria-roledescription="slide"]',
        topCryptoPricesContainer: 'div[class*="bg-card"]',
        cryptoSymbol: 'td:first-child',
        cryptoPrice: 'td:nth-child(2)',
        cryptoPercentChange: 'td:nth-child(3)'
    }

    // Navigate to explore page
    visitExplorePage() {
        cy.visit('/en-AE/explore');
        cy.get('body', { timeout: 20000 }).should('be.visible');
    }

    // Verify Spot Market section exists and is visible
    verifySpotMarketSectionVisible() {
        cy.get(this.locators.spotMarketSection).should('be.visible');
    }

    // Verify Spot Market heading
    verifySpotMarketHeading() {
        cy.contains('Spot market').should('be.visible');
    }

    // Get trading table element
    getTradingTable() {
        return cy.get(this.locators.tradingTable);
    }

    // Get all trading pair rows (filters out empty rows with less than 4 columns)
    getTradingRows() {
        return cy.get('table tbody tr').filter(function() {
            // Only return rows that have exactly 4 td elements (valid trading pair data)
            return Cypress.$(this).find('td').length === 4;
        });
    }

    // Get all trading rows including empty ones
    getAllTradingRowsRaw() {
        return cy.get(this.locators.tradingTableRows);
    }

    // Verify trading pairs are displayed
    verifyTradingPairsDisplayed() {
        this.getTradingRows().should('have.length.greaterThan', 0);
    }

    // Get trading pair row by symbol
    getTradingRowBySymbol(symbol) {
        return cy.contains('tr', symbol);
    }

    // Verify specific trading pair exists
    verifyTradingPairExists(symbol) {
        this.getTradingRowBySymbol(symbol).should('be.visible');
    }

    // Get crypto symbol from a row
    getCryptoSymbolFromRow(rowElement) {
        return rowElement.find(this.locators.cryptoSymbol).text();
    }

    // Get crypto price from a row
    getCryptoPriceFromRow(rowElement) {
        return rowElement.find(this.locators.cryptoPrice).text();
    }

    // Get percentage change from a row
    getPercentChangeFromRow(rowElement) {
        return rowElement.find(this.locators.cryptoPercentChange).text();
    }

    // Verify trading pair data structure (symbol, price, percentage change)
    verifyTradingPairDataStructure() {
        return this.getTradingRows().first().then(($row) => {
            const symbol = this.getCryptoSymbolFromRow(cy.wrap($row));
            const price = this.getCryptoPriceFromRow(cy.wrap($row));
            const percentChange = this.getPercentChangeFromRow(cy.wrap($row));

            cy.wrap($row).find('td').eq(0).should('not.be.empty'); // Symbol
            cy.wrap($row).find('td').eq(1).should('not.be.empty'); // Price
            cy.wrap($row).find('td').eq(2).should('not.be.empty'); // % Change
        });
    }

    // Verify multiple trading pairs have correct data structure
    verifyMultipleTradingPairStructures(count = 5) {
        this.getTradingRows().each(($row, index) => {
            if (index < count) {
                cy.wrap($row).find('td').should('have.length', 4); // 4 columns: symbol, price, %, action
                cy.wrap($row).find('td').eq(0).should('not.be.empty');
                cy.wrap($row).find('td').eq(1).should('not.be.empty');
                cy.wrap($row).find('td').eq(2).should('not.be.empty');
            }
        });
    }

    // Verify price format (should contain $ sign)
    verifyPriceFormat() {
        this.getTradingRows().first().then(($row) => {
            cy.wrap($row).find('td').eq(1).invoke('text').should('match', /^\$[\d,]+(\.\d{2})?$/);
        });
    }

    // Verify percentage format (should contain % sign)
    verifyPercentageFormat() {
        this.getTradingRows().first().then(($row) => {
            cy.wrap($row).find('td').eq(2).invoke('text').should('match', /^\d+(\.\d{1,2})?%$/);
        });
    }

    // Verify category tabs are visible (Hot, Gainers, Losers)
    verifyCategoryTabsVisible() {
        cy.contains('Hot').should('be.visible');
        cy.contains('Gainers').should('be.visible');
        cy.contains('Losers').should('be.visible');
    }

    // Switch to a specific category tab and verify data changes
    switchToCategory(categoryName) {
        cy.contains(categoryName).click();
        cy.get(this.locators.tradingTableRows, { timeout: 10000 }).should('have.length.greaterThan', 0);
    }

    // Verify "Today's top crypto prices" heading is visible
    verifyTopCryptoPricesHeadingVisible() {
        cy.contains("Today's top crypto prices").should('be.visible');
    }

    // Verify trading data is not empty after page load
    verifyTradingDataLoaded() {
        this.getTradingRows().its('length').should('be.greaterThan', 0);
    }

    // Verify trading pairs are present and contain expected crypto (by fixture data)
    verifyExpectedCryptoPairs(cryptoPairs) {
        cryptoPairs.forEach(pair => {
            this.verifyTradingPairExists(pair.symbol);
        });
    }

    // Get all trading pair data as objects
    getAllTradingPairsData() {
        const pairsData = [];
        this.getTradingRows().each(($row) => {
            const $cells = cy.wrap($row).find('td');
            $cells.eq(0).invoke('text').then(symbol => {
                $cells.eq(1).invoke('text').then(price => {
                    $cells.eq(2).invoke('text').then(percentChange => {
                        pairsData.push({ symbol, price, percentChange });
                    });
                });
            });
        });
        return cy.wrap(pairsData);
    }

    // Verify trading section is not hidden/invisible due to opacity or display issues
    verifyTradingSectionNotHidden() {
        cy.get(this.locators.spotMarketSection).should('have.css', 'display').and('not.equal', 'none');
        cy.get(this.locators.tradingTable).should('be.visible');
    }

    // Verify table persists after page reload
    verifyTradingDataPersistsAfterReload() {
        this.getTradingRows().its('length').then((initialCount) => {
            cy.reload();
            cy.get('body', { timeout: 20000 }).should('be.visible');
            this.getTradingRows().its('length').should('equal', initialCount);
        });
    }

}
