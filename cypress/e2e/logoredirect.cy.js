describe('Logo Redirect', () => {
  it('redirects from trade.mb.io to mb.io', () => {
    cy.visit('https://trade.mb.io/login?next=/');
    cy.get('[alt="Logo"]').click();
    cy.location('origin').should('eq', 'https://mb.io');
    cy.location('pathname').should('include', '/en-AE');
  });
});