// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('URL', () => {
    cy.visit('https://trade.mb.io/login?next=/');

    // Click the logo (assuming it has alt text or role you can target)
    cy.get('a[href*="mb.io/"]').click(); // adjust selector if needed

    // Verify URL starts with expected base URL, ignoring query params
    cy.url().should('match', /^https:\/\/mb\.io\/en-AE/);

   // Wait until redirect completes
  cy.location('hostname', { timeout: 20000 })
    .should('eq', 'mb.io')

  
 
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })