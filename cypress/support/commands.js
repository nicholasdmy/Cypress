Cypress.Commands.add('createAccount', () => {
  cy.visit('https://front.serverest.dev/cadastrarusuarios')

  const ts = Date.now();
  const name = `Alice ${ts}`;
  const email = `Alice${ts}@test.com`;
  const password = 'Tester#123';
  const expectedUrl = 'https://front.serverest.dev/home';

  cy.get('[data-testid="nome"]').click();
  cy.get('[data-testid="nome"]').type(name);
  cy.get('[data-testid="nome"]').should('have.value', name);

  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="email"]').should('have.value', email);

  cy.get('[data-testid="password"]').type(password);
  cy.get('[data-testid="cadastrar"]').click();


  cy.url({ timeout: 10000 }).should('eq', expectedUrl);
})
