it('Should successfully create a new user', () => {

    const dynamicEmail = `alice_api_qa_${Date.now()}@test.com`;

    cy.request({

      method: 'POST',
      url: 'https://serverest.dev/usuarios',

      body: {
        nome: "Alice API QA",
        email: dynamicEmail,
        password: "Test#123",
        administrador: "false"

      }

    }).then((response) => {

      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      expect(response.body).to.have.property('_id');

    });

  });
  