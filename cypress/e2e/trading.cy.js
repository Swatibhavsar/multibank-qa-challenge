import { ExplorePage } from '../pages/ExplorePage';
import {MbHomePage} from "../pages/MbHomePage";
//import { requireProfile, PROFILE_BROWSER } from '../support/profile';

describe('Trading Functionality - Spot Trading Section', function () {
  let explorePage;
  let fixtureData;
  let mbHomePage;

  before(function () {
    //requireProfile(this, PROFILE_BROWSER);
    cy.fixture('trading').then((data) => {
      fixtureData = data;
    });
  });

  beforeEach(() => {
     cy.visit('https://mb.io/en-AE/explore');


  });

  describe.skip('Spot Trading Section Visibility', () => {
    explorePage = new ExplorePage();
        //mbHomePage = new MbHomePage();
    it('displays the spot trading section', () => {
         
        
         cy.get('body', { timeout: 20000 }).should('be.visible');
      explorePage.verifySpotMarketSectionVisible();
    });

    it('displays the spot market heading', () => {
      explorePage.verifySpotMarketHeading();
    });

    it('displays "Today\'s top crypto prices" heading', () => {
      explorePage.verifyTopCryptoPricesHeadingVisible();
    });

    it('spot trading section is not hidden due to CSS', () => {
      explorePage.verifyTradingSectionNotHidden();
    });
  });

  describe.skip('Trading Pairs Display Across Categories', () => {
    it('displays trading pairs in the spot market table', () => {
      explorePage.verifyTradingPairsDisplayed();
    });

    it('displays category tabs (Hot, Gainers, Losers)', () => {
      explorePage.verifyCategoryTabsVisible();
    });

    it('displays trading pairs in Hot category', () => {
      explorePage.getTradingRows().should('have.length.greaterThan', 0);
    });

    it('switches to Gainers category and displays trading pairs', () => {
      explorePage.switchToCategory('Gainers');
      explorePage.verifyTradingPairsDisplayed();
    });

    it('switches to Losers category and displays trading pairs', () => {
      explorePage.switchToCategory('Losers');
      explorePage.verifyTradingPairsDisplayed();
    });

    it('displays minimum expected number of trading pairs', () => {
      explorePage.getTradingRows().should(
        'have.length.greaterThan',
        fixtureData.expectedMinTableRows - 1
      );
    });
  });

  describe.skip('Trading Pair Data Structure', () => {
    it('each trading pair row has correct column structure (4 columns)', () => {
      explorePage.verifyMultipleTradingPairStructures(5);
    });

    it('crypto symbol is displayed in first column', () => {
      explorePage.getTradingRows().first().find('td').eq(0).should('not.be.empty');
    });

    it('crypto price is displayed in second column', () => {
      explorePage.getTradingRows().first().find('td').eq(1).should('not.be.empty');
    });

    it('percentage change is displayed in third column', () => {
      explorePage.getTradingRows().first().find('td').eq(2).should('not.be.empty');
    });

    it('price follows correct format ($ with numbers)', () => {
      explorePage.verifyPriceFormat();
    });

    it('percentage change follows correct format (numbers with %)', () => {
      explorePage.verifyPercentageFormat();
    });

    it('all visible trading pairs have complete data structure', () => {
      explorePage.getTradingRows().each(($row) => {
        cy.wrap($row).find('td').should('have.length', 4);
        cy.wrap($row).find('td').eq(0).invoke('text').should('not.be.empty');
        cy.wrap($row).find('td').eq(1).invoke('text').should('not.be.empty');
        cy.wrap($row).find('td').eq(2).invoke('text').should('not.be.empty');
      });
    });
  });

  describe('Expected Cryptocurrency Pairs', () => {
    it('displays MBG (MultiBank Group) in trading pairs', () => {
      explorePage.verifyTradingPairExists('MBG');
    });

    it('displays BTC (Bitcoin) in trading pairs', () => {
      explorePage.verifyTradingPairExists('BTC');
    });

    it('displays ETH (Ethereum) in trading pairs', () => {
      explorePage.verifyTradingPairExists('ETH');
    });

    it('displays SOL (Solana) in trading pairs', () => {
      explorePage.verifyTradingPairExists('SOL');
    });

    it('displays XRP in trading pairs', () => {
      explorePage.verifyTradingPairExists('XRP');
    });

    it('displays all expected crypto pairs from fixture', () => {
      const pairsToVerify = fixtureData.expectedCryptoPairs;
      pairsToVerify.forEach(pair => {
        explorePage.verifyTradingPairExists(pair.symbol);
      });
    });
  });

  describe('Data Presentation and Consistency', () => {
    it('trading data loads successfully on page load', () => {
      explorePage.verifyTradingDataLoaded();
    });

    it('multiple trading pairs follow the same presentation format', () => {
      explorePage.getTradingRows().each(($row, index) => {
        if (index < 5) {
          // Check first 5 rows
          cy.wrap($row).find('td').eq(1).invoke('text').should('match', /^\$[\d,]+(\.\d{2})?$/);
          cy.wrap($row).find('td').eq(2).invoke('text').should('match', /^\d+(\.\d{1,2})?%$/);
        }
      });
    });

    it('trading section remains visible after page reload', () => {
      explorePage.getTradingRows().its('length').then((initialCount) => {
        expect(initialCount).to.be.greaterThan(0);
        cy.reload();
        cy.get('body', { timeout: 20000 }).should('be.visible');
        explorePage.getTradingRows().should('have.length', initialCount);
      });
    });

    it('trading data persists across category switches', () => {
      explorePage.getTradingRows().its('length').then((hotCount) => {
        explorePage.switchToCategory('Gainers');
        explorePage.getTradingRows().should('have.length.greaterThan', 0);
        explorePage.switchToCategory('Hot');
        explorePage.getTradingRows().should('have.length', hotCount);
      });
    });
  });

  describe('Table Structure Validation', () => {
    it('trading table element exists', () => {
      explorePage.getTradingTable().should('exist');
    });

    it('trading table has tbody with rows', () => {
      cy.get('table tbody').should('exist');
      explorePage.getTradingRows().should('have.length.greaterThan', 0);
    });

    it.only('first trading pair row contains expected elements', () => {
      explorePage.getTradingRows().first().then(($firstRow) => {
        cy.wrap($firstRow).find('td').should('have.length', 4);
        cy.wrap($firstRow).find('td').eq(0).invoke('text').should('include', 'MBG');
      });
    });

    it('price values are numeric or currency formatted', () => {
      explorePage.getTradingRows().each(($row) => {
        cy.wrap($row).find('td').eq(1).invoke('text').should('match', /^\$|^[\d,]/);
      });
    });
  });

  describe('Market Data Accuracy', () => {
    it('displays trading pairs with non-empty symbol names', () => {
      explorePage.getTradingRows().each(($row) => {
        cy.wrap($row).find('td').eq(0).invoke('text').should('not.be.empty').and('not.be.blank');
      });
    });

    it('displays trading pairs with valid price values', () => {
      explorePage.getTradingRows().first().then(($row) => {
        cy.wrap($row).find('td').eq(1).invoke('text').then((priceText) => {
          expect(priceText).to.match(/\d/);
        });
      });
    });

    it('displays trading pairs with percentage change values', () => {
      explorePage.getTradingRows().each(($row) => {
        cy.wrap($row)
          .find('td')
          .eq(2)
          .invoke('text')
          .then((percentText) => {
            expect(percentText).to.match(/\d+(\.\d{1,2})?%/);
          });
      });
    });
  });
});
