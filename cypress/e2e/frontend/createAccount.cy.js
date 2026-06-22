describe('createAccount', () => {
  
    it('should create a new account successfully', () => {
        const ts = Date.now();
        const email = `Alice${ts}@test.com`;
        const name = `Alice ${ts}`;
        const password = 'Tester#123';
        const expectedUrl = 'https://front.serverest.dev/home';

        //Arrange
        cy.visit('https://front.serverest.dev');
        //Act
                
        cy.get('[data-testid="cadastrar"]').click();
        cy.url()
          .should('eq', 'https://front.serverest.dev/cadastrarusuarios')

        cy.get('[data-testid="nome"]').click();
        cy.get('[data-testid="nome"]').type(name);
        cy.get('[data-testid="nome"]')
          .should('have.value', name)
        
        cy.get('[data-testid="email"]').type(email);
        cy.get('[data-testid="email"]')
          .should('have.value', email)
        
        cy.get('[data-testid="password"]').type(password);
        cy.get('[data-testid="cadastrar"]').click();

        //Assert
        cy.get('.alert-link').should('be.visible').and('contain.text', 'Cadastro realizado com sucesso');
        cy.url({ timeout: 10000 })
        .should('eq', expectedUrl);
    })
});
