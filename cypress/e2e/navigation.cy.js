import fixtureData from '../fixtures/testData.json';
import MbHomePage from '../pages/MbHomePage';

describe('MB.IO Top Navigation Menu', () => {
  const mbHomePage = new MbHomePage();

  beforeEach(() => {
    // Visit mb.io directly
    cy.visit('https://mb.io/en-AE');
  });

  it('renders a global page shell', () => {
    cy.get('body').should('be.visible');
    cy.get('header, nav, [role="navigation"], [class*="header"], [class*="nav"]')
      .should('have.length.greaterThan', 0);
  });

  it('shows all left and right navigation items from fixture', () => {
    // Left menu items
    // Check for common navigation elements cy.get(leftMenuSelector).should('have.length.greaterThan', 0); cy.get(rightMenuSelector).should('have.length.greaterThan', 0); //check all menu items from fixture fixtureData.leftMenuItems.forEach((item) => { cy.get(leftMenuSelector).contains(item).should('be.visible') }); fixtureData.rightMenuItems.forEach((item) => { cy.get(rightMenuSelector).contains(item).should('be.visible') });
    mbHomePage.leftMenuItems().should('have.length.greaterThan', 0);
    mbHomePage.rightMenuItems().should('have.length.greaterThan', 0);
    fixtureData.leftMenuItems.forEach((item) =>
       {
         mbHomePage.leftMenuItems().contains(item).should('be.visible') 
      });
     
      fixtureData.rightMenuItems.forEach((item) =>
       {
         mbHomePage.rightMenuItems().contains(item).should('be.visible') 
      });
    // Icons
   mbHomePage.icons().should('have.length.greaterThan', 0);
  });

  it('Navigation items are functional and link to appropriate destinations', () => {
    mbHomePage.links().each(($link) => {
      const href = $link.attr('href');
      expect(href, 'href must be non-empty').to.be.a('string').and.not.be.empty;
    });
  });

});