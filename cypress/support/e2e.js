import './commands';
Cypress.on('uncaught:exception', (err) => {
  // Ignore all minified React production errors
  if (err.message.includes('Minified React error')) {
    return false;
  }
});