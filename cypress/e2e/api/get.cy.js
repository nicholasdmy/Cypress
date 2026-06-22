describe('ServeRest API Automation - Users Endpoint', () => {

  it('Should successfully list all registered users', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios'
    }).then((response) => {
      expect(response.status).to.eq(200);
      
      expect(response.body).to.have.property('quantidade');
      
      expect(response.body.usuarios).to.be.an('array');
    });
    });
});
