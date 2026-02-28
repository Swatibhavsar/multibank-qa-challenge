export class CompanyPage {

    locators = {
        // Why MultiBank section
        whyMultibankHeading: 'h1:contains("Why MultiBank")',
        whyMultibankSubheading: 'h2:contains("nearly two decades")',
        
        // Statistics section
        turnoverValue: 'body:contains("$2 trillion")',
        customersValue: 'body:contains("2,000,000")',
        officesValue: 'body:contains("25")',
        
        // Key sections headings
        globalLeadershipHeading: 'h2:contains("A tradition of global leadership")',
        innovationHeading: 'h2:contains("Innovation with purpose")',
        integrityHeading: 'h2:contains("Integrity built into every decision")',
        
        // Strength section (Three boxes)
        strengthHeading: 'h3:contains("The strength behind MultiBank")',
        regulationBox: 'body:contains("Regulation at our core")',
        trackRecordBox: 'body:contains("Proven track record")',
        securityBox: 'body:contains("Secure")',
        
        // Community & Media section
        communityHeading: 'h3:contains("Community & Media")',
        
        // General
        sections: 'section',
        headings: 'h1, h2, h3'
    }

    // Navigate to company page
    visitCompanyPage() {
        cy.visit('https://mb.io/en-AE/company');
        cy.get('body', { timeout: 20000 }).should('be.visible');
    }

    // Verify page title
    verifyPageTitle(expectedTitle) {
        cy.title().should('include', expectedTitle);
    }

    // Verify "Why MultiBank Group?" main heading
    verifyWhyMultibankHeading() {
        cy.contains('h1', 'Why MultiBank Group?').should('be.visible');
    }

    // Verify MultiBank description paragraph
    verifyMultibankDescription() {
        cy.contains('For nearly two decades').should('be.visible');
        cy.contains('most trusted financial institutions').should('be.visible');
    }

    // Verify company statistics
    verifyCompanyStatistics(stats) {
        Object.keys(stats).forEach(key => {
            cy.contains(stats[key]).should('be.visible');
        });
    }

    // Verify Annual Turnover statistic
    verifyAnnualTurnover(amount) {
        cy.contains(amount).should('be.visible');
    }

    // Verify Customers statistic
    verifyCustomersCount(count) {
        cy.contains(count).should('be.visible');
    }

    // Verify Offices statistic
    verifyOfficesCount(count) {
        cy.contains(count).should('be.visible');
    }

    // Verify "A tradition of global leadership" section
    verifyGlobalLeadershipSection() {
        cy.contains('h2', 'A tradition of global leadership').should('be.visible');
        cy.contains('Founded in 2005').should('be.visible');
    }

    // Verify "Innovation with purpose" section
    verifyInnovationSection() {
        cy.contains('h2', 'Innovation with purpose').should('be.visible');
        cy.contains('technology should simplify finance').should('be.visible');
    }

    // Verify "Integrity built into every decision" section
    verifyIntegritySection() {
        cy.contains('h2', 'Integrity built into every decision').should('be.visible');
        cy.contains('rigorous risk management').should('be.visible');
    }

    // Verify "The strength behind MultiBank Group" heading
    verifyStrengthHeading() {
        cy.contains('h3', 'The strength behind MultiBank Group').should('be.visible');
    }

    // Verify three strength boxes (Regulation, Track Record, Security)
    verifyStrengthBoxes() {
        cy.contains('Regulation at our core').should('be.visible');
        cy.contains('Proven track record').should('be.visible');
        cy.contains('Secure & trusted').should('be.visible');
    }

    // Verify Regulation box content
    verifyRegulationBox(description) {
        cy.contains('Regulation at our core').should('be.visible');
        cy.contains('strict global oversight').should('be.visible');
        if (description) {
            cy.contains(description).should('be.visible');
        }
    }

    // Verify Track Record box content
    verifyTrackRecordBox(description) {
        cy.contains('Proven track record').should('be.visible');
        cy.contains('global experience').should('be.visible');
        if (description) {
            cy.contains(description).should('be.visible');
        }
    }

    // Verify Security box content
    verifySecurityBox(description) {
        cy.contains('Secure & trusted').should('be.visible');
        cy.contains('Institution-grade infrastructure').should('be.visible');
        if (description) {
            cy.contains(description).should('be.visible');
        }
    }

    // Verify all strength boxes with complete descriptions
    verifyAllStrengthBoxesWithDescriptions(expectedBoxes) {
        expectedBoxes.forEach(box => {
            cy.contains(box.title).should('be.visible');
            cy.contains(box.title).parent().within(() => {
                cy.contains(box.description).should('be.visible');
            });
        });
    }

    // Verify "Community & Media" heading
    verifyCommunityHeading() {
        cy.contains('h3', 'Community & Media').should('be.visible');
    }

    // Verify "Get in touch" link exists
    verifyGetInTouchLink() {
        cy.contains('a', 'Get in touch').should('be.visible');
    }

    // Verify all main components are present
    verifyAllMainComponents() {
        this.verifyWhyMultibankHeading();
        this.verifyMultibankDescription();
        this.verifyGlobalLeadershipSection();
        this.verifyInnovationSection();
        this.verifyIntegritySection();
        this.verifyStrengthHeading();
        this.verifyStrengthBoxes();
        this.verifyCommunityHeading();
    }

    // Verify company info is correct against fixture data
    verifyCompanyInfoFromFixture(fixtureData) {
        cy.contains(fixtureData.whymultibankh1).should('be.visible');
        cy.contains(fixtureData.whymultibankp1).should('be.visible');
        cy.contains(fixtureData.turnover).should('be.visible');
        cy.contains(fixtureData.customers).should('be.visible');
        cy.contains(fixtureData.offices).should('be.visible');
        cy.contains(fixtureData.globaleadership).should('be.visible');
        cy.contains(fixtureData.innovation).should('be.visible');
        cy.contains(fixtureData.integrity).should('be.visible');
        cy.contains(fixtureData.strength).should('be.visible');
        cy.contains(fixtureData.regulation).should('be.visible');
        cy.contains(fixtureData.trackrecord).should('be.visible');
        cy.contains(fixtureData.security).should('be.visible');
    }

    // Verify section content is not empty
    verifyContentNotEmpty() {
        cy.get('body').invoke('text').then(text => {
            expect(text.length).to.be.greaterThan(0);
            expect(text).to.include('MultiBank');
        });
    }

    // Verify page has multiple sections with headings
    verifyMultipleSections() {
        cy.get('section').should('have.length.greaterThan', 0);
        cy.get('h1, h2, h3').should('have.length.greaterThan', 5);
    }

    // Get all section headings
    getAllHeadings() {
        return cy.get('h1, h2, h3').then($headings => {
            return Array.from($headings).map(h => h.textContent.trim());
        });
    }

}
