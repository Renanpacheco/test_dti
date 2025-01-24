describe("Login realizado com sucesso", () => {

    beforeEach(()=>{
        cy.visit(
            "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account"
            );
    })

    it("Login com campos em branco", () => {
        
        cy.get("#SubmitLogin > span").click();
        cy.get("#center_column > :nth-child(2)").should('be.visible');
        cy.get("#center_column > :nth-child(2)").should('contain', 'There is 1 error');
        cy.get("#center_column > :nth-child(2)").should('contain', 'An email address required.');

    });

    it("clicando no campo email e não preenchendo", () => {
        
        cy.get("#email").click();
        
        cy.get(".page-heading").click();
        cy.get("#email").should("have.css", "color", "rgb(241, 51, 64)");

    });

    it("Login com erro no campo email", () => {
        cy.get("#email").type("text")
        cy.get("#SubmitLogin > span").click();
        cy.get("#center_column > :nth-child(2)").should('be.visible');
        
        cy.get("#center_column > :nth-child(2)").should('contain', 'There is 1 error');
        cy.get("#center_column > :nth-child(2)").should('contain', 'Invalid email address.');
        cy.get("#email").should('have.value', 'text')

    });

    it("email não cadastrado", () => {
        
        cy.get("#email").type('texto@texto.com');
        
        cy.get(".page-heading").click();
        cy.get("#email").should("have.css", "color", "rgb(53, 179, 63)");
        cy.get("#SubmitLogin > span").click();
        cy.get("#center_column > :nth-child(2)").should("be.visible");
        cy.get("#center_column > :nth-child(2)").should('contain', 'There is 1 error');
        cy.get("#center_column > :nth-child(2)").should('contain', 'Password is required.');

    });

    it("email correto mas sem senha", () => {
        
        cy.get("#email").type("123@1.com131");
        cy.get("#passwd").click();
        cy.get(".page-heading").click();
        cy.get("#passwd").should("have.css", "color", "rgb(241, 51, 64)");
        cy.get("#SubmitLogin > span").click();
        cy.get("#center_column > :nth-child(2)").should("be.visible");
        cy.get("#center_column > :nth-child(2)").should('contain', 'There is 1 error');
        cy.get("#center_column > :nth-child(2)").should('contain', 'Password is required.');

    });

    it("senha com menos de 5 dígitos ", () => {
        
        cy.get("#email").type("123@1.com131");
        cy.get("#passwd").type('123');
        cy.get("#SubmitLogin > span").click();
        cy.get("#center_column > :nth-child(2)").should("be.visible");
        cy.get("#center_column > :nth-child(2)").should('contain', 'There is 1 error');
        cy.get("#center_column > :nth-child(2)").should('contain', 'Invalid password');
        cy.get("#passwd").should("have.value", "123");

    });
});
