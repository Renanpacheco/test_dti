describe("Verificar elementos da página Sing in", () => {
    beforeEach(()=>{
        cy.visit(
            "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account"
            );
    })
    it("Header", () => {
        
        cy.get(".banner").should('be.visible');
        cy.get(".shop-phone > .icon-phone").should("be.visible");
        cy.contains("Call us now:").should('be.visible');
        cy.get(".shop-phone > strong").should("be.visible");
        cy.contains("Contact us").should("be.visible");
        cy.contains("Sign in").should("be.visible");

    });

    it("Section 1", () => {
        
        cy.get(".logo").should('be.visible');
        cy.get("#search_query_top").should("be.visible");
        cy.get("#searchbox > .btn").should("be.visible");
        cy.get('[title="View my shopping cart"]').should("be.visible");
    });

    it("Menu", () => {
        
        cy.get(".sf-menu").should("be.visible");
        cy.contains("Women").should("be.visible");
        cy.get(".sf-menu > :nth-child(2) > .sf-with-ul").should("be.visible");
        cy.get(".sf-menu > :nth-child(3) > a").should("be.visible");        
        cy.contains("Blog").should("be.visible");
        
    });

    it("Navegação", () => {
        
        cy.get(".home").should("be.visible");
        cy.contains("Authentication").should("be.visible");
        
    });

    it("Page heading", () => {
        
        cy.get(".page-heading").should("be.visible");
        
    });

    it("Create an account", () => {
        
        cy.get("#create-account_form").should("be.visible");
        cy.contains("Create an account").should("be.visible");
        cy.contains("Please enter your email address to create an account.").should("be.visible");
        cy.get("#email_create").type("text");
        cy.get("#email_create").should("have.value", "text");
        cy.get(".page-heading").click();
        cy.get("#email_create").should("have.css", "color", "rgb(241, 51, 64)");
        cy.get("#SubmitCreate > span").should('be.visible');
        cy.get("#SubmitCreate > span").should('contain', 'Create an account');
        cy.get("#SubmitCreate > span").should('have.css', 'color', 'rgb(255, 255, 255)');
        
    });

    it("login", () => {
        
        cy.get("#login_form").should("be.visible");
        cy.get("#login_form > .page-subheading").should("be.visible");
        cy.get(":nth-child(1) > label").should("be.visible");
        cy.get("#email").should("be.visible");
        cy.get(":nth-child(2) > label").should("be.visible");
        cy.get("#passwd").should("be.visible");
        cy.get(".lost_password > a").should("be.visible");
        cy.get("#SubmitLogin > span").should("be.visible");
        
    });

    it("Footer", () => {
        
        cy.get("#footer").should('contain', 'Newsletter');
        cy.get("#newsletter-input").should('be.visible');
        cy.get("#social_block > h4").should('contain', 'Follow us');
        cy.get(".facebook").should('be.visible');
        cy.get(".twitter").should('be.visible');
        cy.get(".rss").should('be.visible');
        cy.get("#footer").should('contain', 'Categories');
        cy.get(".blockcategories_footer").should('contain', 'Women');
        cy.get("#footer").should('contain', 'Information');
        cy.get("#block_various_links_footer").should('contain', 'Our stores');
        cy.get("#block_various_links_footer").should('contain', 'Terms and conditions of use');
        cy.get("#block_various_links_footer").should('contain', 'About us');
        cy.get("#footer").should('contain', 'My account');
        cy.get(".row > :nth-child(7)").should('contain', 'My orders');
        cy.get(".row > :nth-child(7)").should('contain', 'My credit slips');
        cy.get(".row > :nth-child(7)").should('contain', 'My addresses');
        cy.get(".row > :nth-child(7)").should("contain", "My personal info");
        cy.get("#footer").should('contain', 'Store Information');
        cy.get("div > .toggle-footer > :nth-child(1)").should('be.visible');
        cy.get("div > .toggle-footer > :nth-child(1)").should('be.visible');
        cy.get("div > .toggle-footer > :nth-child(2)").should('be.visible');
        cy.get("div > .toggle-footer > :nth-child(3)").should('be.visible');
        cy.get(".bottom-footer > div").should('be.visible');
        
    });

});
