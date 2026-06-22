describe('addToCart', () => {

  beforeEach(() => {
    cy.createAccount(); 
  })

  it('Deve adicionar um produto ao carrinho com sucesso', () => {
    
    const productName = 'Samsung';
    const expectedUrl = 'https://front.serverest.dev/minhaListaDeProdutos';
    const expectedCartUrl = 'https://front.serverest.dev/carrinho';

    cy.get('[data-testid="pesquisar"]').type(productName);
    cy.get('[data-testid="botaoPesquisar"]').click();
    cy.get('[data-testid="adicionarNaLista"]').first().click();
    
    cy.url({ timeout: 10000 }).should('eq', expectedUrl);
    cy.get('[data-testid="adicionar carrinho"]').first().click();

    cy.url({ timeout: 10000 }).should('eq', expectedCartUrl);
  })
})
