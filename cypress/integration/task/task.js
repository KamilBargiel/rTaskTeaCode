describe("registration form",()=>{
    beforeEach(() => {
        cy.visit('https://staging.paymi.com/users/sign_up')
    })
    it ("cannot enter with invalid email",()=>{

        cy.get('#user_email[type="email"]').
        should('be.empty').type("invalid email")

        cy.get('#user_password[type="password"]').
        should('be.empty').type("ValidPassword123")

        cy.get('#user_terms_and_conditions').
        should('not.be.checked').check({force:true}).
        should('be.checked')

        cy.get('#email-error').should('not.be.visible')

        cy.get('[type=submit]').click()

        cy.get('#email-error').should('be.visible')

        cy.url().should("equal",'https://staging.paymi.com/users/sign_up')

        cy.get('#user_email[aria-invalid="true"]').
        should("exist")
    })

})