import { HomePage } from '../pages/HomePage';
import { CompanyPage } from '../pages/CompanyPage';

describe('Content Validation - Marketing & Company Pages', function () {
  let homePage;
  let companyPage;
  let fixtureData;

  before(function () {
    cy.fixture('contentValidation').then((data) => {
      fixtureData = data;
    });
  });

  beforeEach(() => {
    homePage = new HomePage();
    companyPage = new CompanyPage();
  });

  describe('Home Page - Marketing Banners & Download Section', () => {
    beforeEach(() => {
      homePage.visitHomePage();
    });

    it('displays "Crypto for everyone" marketing banner', () => {
      homePage.verifyCryptoForEveryoneSection();
    });

    it('displays correct banner heading text', () => {
      cy.contains('Crypto for everyone').should('be.visible');
    });

    it('displays correct banner description text', () => {
      cy.contains(fixtureData.homePage.cryptoForEveryone.description).should('be.visible');
    });

    it('displays "Download the app" link', () => {
      homePage.verifyDownloadAppLink(fixtureData.homePage.downloadAppLink.href);
    });

    it('download app link has correct href to app store', () => {
      homePage.getDownloadAppLink()
        .should('have.attr', 'href')
        .and('include', 'mbio.go.link');
    });

    it('displays "Open an account" link', () => {
      homePage.verifyOpenAccountLinkVisible();
    });

    it('both download and account links are present', () => {
      homePage.verifyDownloadAndAccountLinksPresent();
    });

    it('download app link links to correct URL', () => {
      homePage.getDownloadAppLink()
        .should('have.attr', 'href', fixtureData.homePage.downloadAppLink.href);
    });

    it('download app link is functional and visible', () => {
      homePage.verifyDownloadAppLinkExists();
    });
  });

  describe('Home Page - Marketing Content Structure', () => {
    beforeEach(() => {
      homePage.visitHomePage();
    });

    it('displays marketing banner with complete content structure', () => {
      homePage.verifyBannerContentStructure();
    });

    it('displays "The fastest way to trade" section', () => {
      homePage.verifyFastestWayToTradeSection();
    });

    it('displays cryptos in portfolio section (MultiBank, Bitcoin, Ethereum)', () => {
      homePage.verifyCryptosInPortfolio();
    });

    it('displays "Securely build your portfolio" section', () => {
      homePage.verifyPortfolioSection();
    });

    it('displays "Start Portfolio" call-to-action link', () => {
      homePage.verifyStartPortfolioLink();
    });

    it('displays multiple marketing sections with content', () => {
      cy.get('section').should('have.length.greaterThan', 2);
    });

    it('all marketing sections have visible headings', () => {
      cy.get('section').each(($section) => {
        cy.wrap($section).within(() => {
          cy.get('h2, h3').should('have.length.greaterThan', 0).should('be.visible');
        });
      });
    });
  });

  describe('Navigation to Company Page', () => {
    it('home page displays Company menu link', () => {
      homePage.visitHomePage();
      homePage.verifyCompanyMenuLink();
    });

    it('can navigate to company page via menu', () => {
      homePage.visitHomePage();
      homePage.navigateToCompanyPage();
      companyPage.verifyWhyMultibankHeading();
    });
  });

  describe('Company Page - Why MultiBank Section', () => {
    beforeEach(() => {
      companyPage.visitCompanyPage();
    });

    it('displays "Why MultiBank Group?" main heading', () => {
      companyPage.verifyWhyMultibankHeading();
    });

    it('displays correct company description', () => {
      cy.contains('For nearly two decades').should('be.visible');
    });

    it('displays all company statistics', () => {
      companyPage.verifyAnnualTurnover(fixtureData.companyPage.turnover);
      companyPage.verifyCustomersCount(fixtureData.companyPage.customers);
      companyPage.verifyOfficesCount(fixtureData.companyPage.offices);
    });

    it('displays $2 trillion annual turnover', () => {
      cy.contains('$2 trillion').should('be.visible');
    });

    it('displays 2,000,000+ customers worldwide', () => {
      cy.contains('2,000,000+').should('be.visible');
    });

    it('displays 25+ offices globally', () => {
      cy.contains('25+').should('be.visible');
    });
  });

  describe('Company Page - Key Sections (Global Leadership, Innovation, Integrity)', () => {
    beforeEach(() => {
      companyPage.visitCompanyPage();
    });

    it('displays "A tradition of global leadership" section', () => {
      companyPage.verifyGlobalLeadershipSection();
    });

    it('displays "Innovation with purpose" section', () => {
      companyPage.verifyInnovationSection();
    });

    it('displays "Integrity built into every decision" section', () => {
      companyPage.verifyIntegritySection();
    });

    it('displays global leadership description with "Founded in 2005"', () => {
      cy.contains('Founded in 2005').should('be.visible');
    });

    it('displays innovation description about simplifying finance', () => {
      cy.contains('technology should simplify finance').should('be.visible');
    });

    it('displays integrity description about risk management', () => {
      cy.contains('rigorous risk management').should('be.visible');
    });

    it('all key sections have proper headings and descriptions', () => {
      cy.get('h2').should('have.length.greaterThan', 2);
      cy.get('p').should('have.length.greaterThan', 4);
    });
  });

  describe('Company Page - The Strength Section (Three Boxes)', () => {
    beforeEach(() => {
      companyPage.visitCompanyPage();
    });

    it('displays "The strength behind MultiBank Group" heading', () => {
      companyPage.verifyStrengthHeading();
    });

    it('displays all three strength boxes', () => {
      companyPage.verifyStrengthBoxes();
    });

    it('displays "Regulation at our core" box', () => {
      cy.contains('Regulation at our core').should('be.visible');
    });

    it('regulation box contains correct description', () => {
      cy.contains('Regulation at our core').parent().within(() => {
        cy.contains('strict global oversight').should('be.visible');
      });
    });

    it('displays "Proven track record" box', () => {
      cy.contains('Proven track record').should('be.visible');
    });

    it('track record box contains correct description', () => {
      cy.contains('Proven track record').parent().within(() => {
        cy.contains('global experience').should('be.visible');
      });
    });

    it('displays "Secure & trusted" box', () => {
      cy.contains('Secure & trusted').should('be.visible');
    });

    it('security box contains correct description', () => {
      cy.contains('Secure & trusted').parent().within(() => {
        cy.contains('Institution-grade infrastructure').should('be.visible');
      });
    });

    it('all three boxes have complete information', () => {
      cy.contains('Regulation at our core').should('be.visible');
      cy.contains('Proven track record').should('be.visible');
      cy.contains('Secure & trusted').should('be.visible');
      cy.contains('strict global oversight').should('be.visible');
      cy.contains('global experience').should('be.visible');
      cy.contains('Institution-grade infrastructure').should('be.visible');
    });
  });

  describe('Company Page - All Components Present', () => {
    beforeEach(() => {
      companyPage.visitCompanyPage();
    });

    it('displays all main components of the company page', () => {
      companyPage.verifyAllMainComponents();
    });

    it('page contains multiple sections with content', () => {
      companyPage.verifyMultipleSections();
    });

    it('page content is not empty', () => {
      companyPage.verifyContentNotEmpty();
    });

    it('displays "Community & Media" section heading', () => {
      companyPage.verifyCommunityHeading();
    });

    it('displays "Get in touch" call-to-action link', () => {
      companyPage.verifyGetInTouchLink();
    });

    it('renders all expected components with correct text from fixture', () => {
      companyPage.verifyCompanyInfoFromFixture(fixtureData.companyPage);
    });
  });

  describe('Company Page - Content Accuracy & Completeness', () => {
    beforeEach(() => {
      companyPage.visitCompanyPage();
    });

    it('displays exact fixture text for "Why MultiBank Group?" heading', () => {
      cy.contains('h1', fixtureData.companyPage.whymultibankh1).should('be.visible');
    });

    it('displays exact fixture text for main description', () => {
      cy.contains(fixtureData.companyPage.whymultibankp1).should('be.visible');
    });

    it('displays exact fixture text for turnover statistic', () => {
      cy.contains(fixtureData.companyPage.turnover).should('be.visible');
    });

    it('displays global leadership description text', () => {
      cy.contains(fixtureData.companyPage.globaleadershipp1).should('be.visible');
    });

    it('displays innovation description text', () => {
      cy.contains(fixtureData.companyPage.innovationp1).should('be.visible');
    });

    it('displays integrity description text', () => {
      cy.contains(fixtureData.companyPage.integrityp1).should('be.visible');
    });

    it('displays regulation description text', () => {
      cy.contains(fixtureData.companyPage.regulationp1).should('be.visible');
    });

    it('displays track record description text', () => {
      cy.contains(fixtureData.companyPage.trackrecordp1).should('be.visible');
    });

    it('displays security description text', () => {
      cy.contains(fixtureData.companyPage.securityp1).should('be.visible');
    });

    it('all key fixture content is present and visible', () => {
      const companyFixture = fixtureData.companyPage;
      cy.get('body').invoke('text').then(pageText => {
        expect(pageText).to.include(companyFixture.whymultibankh1);
        expect(pageText).to.include(companyFixture.turnover);
        expect(pageText).to.include(companyFixture.customers);
        expect(pageText).to.include(companyFixture.offices);
        expect(pageText).to.include(companyFixture.regulation);
        expect(pageText).to.include(companyFixture.trackrecord);
        expect(pageText).to.include(companyFixture.security);
      });
    });
  });

  describe('Cross-Page Navigation Flow', () => {
    it('can navigate from home page to company page', () => {
      homePage.visitHomePage();
      cy.contains('a', 'Company').should('be.visible');
      homePage.navigateToCompanyPage();
      cy.url().should('include', '/company');
      companyPage.verifyWhyMultibankHeading();
    });

    it('company page has all required content loaded', () => {
      homePage.visitHomePage();
      homePage.navigateToCompanyPage();
      companyPage.verifyAllMainComponents();
    });
  });
});
