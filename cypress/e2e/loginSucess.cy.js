describe('Login realizado com sucesso', () => {
  it('Login com sucesso', () => {
    cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
    cy.get("#email").type("123@1.com131");
    cy.get("#passwd").type("12345");
    cy.get("#SubmitLogin > span").click();
    cy.url().should(
      "be.equal",
      `http://www.automationpractice.pl/index.php?controller=my-account`
    );
    //cy.get(".account > span").should("be.equal", "Teste Novo");
    cy.contains("Teste Novo").should('be.visible')

  })
})

// depois de registrar o email a primeira vez na pagina de sign in, ao passar para a página de registro posso alterar o email
// tamanho máximo para nome e sobrenome é 32 mas só valida no final, aceita &, acentuação sozinha, / * - , ponto final, [], 
// não aceita numero no nome, pontuação em geral menos o ponto final, (), {}