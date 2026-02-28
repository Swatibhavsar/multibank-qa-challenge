export class HomePage {

    locators = {
        // Marketing banner and download section
        cryptoForEveryoneSection: 'section[class*="gap-"] > div:has-text("Crypto for everyone")',
        cryptoForEveryoneHeading: 'h3:contains("Crypto for everyone")',
        downloadAppLink: 'a[href*="mbio.go.link"]',
        downloadAppButton: 'a:contains("Download the app")',
        openAccountLink: 'a:contains("Open an account")',
        
        // Navigation
        companyLink: 'a[href*="/company"]',
        exploreLink: 'a[href*="/explore"]',
        
        // Marketing sections
        marketingSections: 'section',
        headings: 'h3, h2',
    }

    // Navigate to home page
    visitHomePage() {
        cy.visit('https://mb.io/en-AE/');
        cy.get('body', { timeout: 20000 }).should('be.visible');
    }

    // Verify "Crypto for everyone" banner section is visible
    verifyCryptoForEveryoneSection() {
        cy.contains('h3', 'Crypto for everyone').should('be.visible');
    }

    // Verify the banner description text
    verifyCryptoForEveryoneDescription(expectedText) {
        cy.contains('Crypto for everyone').parent().parent().within(() => {
            cy.contains(expectedText).should('be.visible');
        });
    }

    // Get download app link
    getDownloadAppLink() {
        return cy.contains('a', 'Download the app');
    }

    // Verify download app link is visible and has correct href
    verifyDownloadAppLink(expectedHref) {
        this.getDownloadAppLink().should('be.visible').and('have.attr', 'href', expectedHref);
    }

    // Verify download app link exists
    verifyDownloadAppLinkExists() {
        this.getDownloadAppLink().should('exist').and('be.visible');
    }

    // Get open account link
    getOpenAccountLink() {
        return cy.contains('a', 'Open an account');
    }

    // Verify open account link is visible
    verifyOpenAccountLinkVisible() {
        this.getOpenAccountLink().should('be.visible');
    }

    // Verify both download and account links are present
    verifyDownloadAndAccountLinksPresent() {
        this.verifyDownloadAppLinkExists();
        this.verifyOpenAccountLinkVisible();
    }

    // Click on download app link
    clickDownloadApp() {
        this.getDownloadAppLink().click();
    }

    // Verify company menu link exists and is functional
    verifyCompanyMenuLink() {
        cy.contains('a', 'Company').should('be.visible').and('have.attr', 'href', '/en-AE/company');
    }

    // Click company menu to navigate to company page
    navigateToCompanyPage() {
        cy.contains('a', 'Company').click();
        cy.get('body', { timeout: 20000 }).should('be.visible');
    }

    // Verify explore menu link
    verifyExploreMenuLink() {
        cy.contains('a', 'Explore').should('be.visible');
    }

    // Verify marketing section headings
    verifyMarketingHeadings(expectedHeadings) {
        expectedHeadings.forEach(heading => {
            cy.contains(heading).should('be.visible');
        });
    }

    // Verify banner content structure
    verifyBannerContentStructure() {
        cy.contains('Crypto for everyone').should('be.visible');
        cy.contains('Simple, secure and speedy').should('be.visible');
        this.verifyDownloadAppLinkExists();
        this.verifyOpenAccountLinkVisible();
    }

    // Get count of marketing sections
    getMarketingSectionsCount() {
        return cy.get(this.locators.marketingSections).then($sections => {
            return $sections.length;
        });
    }

    // Verify specific marketing section contains expected text
    verifyMarketingSectionContent(sectionHeading, expectedText) {
        cy.contains(sectionHeading).parent().parent().within(() => {
            cy.contains(expectedText).should('be.visible');
        });
    }

    // Verify "The fastest way to trade" section
    verifyFastestWayToTradeSection() {
        cy.contains('The fastest way to trade').should('be.visible');
    }

    // Verify payment methods text
    verifyPaymentMethodsText(expectedText) {
        cy.contains(expectedText).should('be.visible');
    }

    // Verify cryptos displayed in portfolio section
    verifyCryptosInPortfolio() {
        cy.contains('MultiBank Group').should('be.visible');
        cy.contains('Bitcoin').should('be.visible');
        cy.contains('Ethereum').should('be.visible');
    }

    // Verify "Securely build your portfolio" section
    verifyPortfolioSection() {
        cy.contains('Securely build your portfolio').should('be.visible');
    }

    // Verify start portfolio button/link
    verifyStartPortfolioLink() {
        cy.contains('a', 'Start Portfolio').should('be.visible');
    }

}
