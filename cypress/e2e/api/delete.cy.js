describe('DELETE /usuarios', () => {

  it('Should successfully delete a newly created user', () => {
    const dynamicEmail = `alice_delete_qa_${Date.now()}@test.com`;

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: "Alice to be Deleted",
        email: dynamicEmail,
        password: "Test#123",
        administrador: "false"
      }
    }).then((response) => {
      const userId = response.body._id;

      cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/usuarios/${userId}`
      }).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200);
        
        expect(deleteResponse.body.message).to.eq('Registro excluído com sucesso');
      });
    });
  });

});
