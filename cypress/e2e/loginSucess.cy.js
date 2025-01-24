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
    cy.contains("Teste Novo").should('be.visible')

  })
})