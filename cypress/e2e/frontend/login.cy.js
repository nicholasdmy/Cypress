describe('login', () => {
  
    it('should login successfully with valid credentials', () => {
        const email = 'Alice1@test.com';
        const password = 'Tester#123';
        const expectedUrl = 'https://front.serverest.dev/home';
        //Arrange
        cy.visit('https://front.serverest.dev');
        //Act
        cy.get('[data-testid="email"]').type(email);
        cy.get('[data-testid="senha"]').type(password);
        cy.get('[data-testid="entrar"]').click();

       //assert
        cy.url({ timeout: 10000 })
        .should('eq', expectedUrl);

        cy.get('[data-testid="logout"]').should('be.visible').and('contain.text', 'Logout');

    })
});
