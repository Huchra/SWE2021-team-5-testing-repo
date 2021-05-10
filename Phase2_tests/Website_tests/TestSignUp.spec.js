describe("test Sign Up on web", function(){
   before(function(){
        cy.visit("https://identity.flickr.com/sign-up")
        cy.contains('Sign up for Flickr').should('be.visible')
    })
    
    it("test Sign Up Age", function(){
        cy.get('#sign-up-age').type("12")
        cy.get('#sign-up-last-name').click()
        cy.contains('In order to use Flickr, you must be 13 or older').should('be.visible')
        //test for minimum age of 13 
        cy.get('#sign-up-age').clear().type('121')
        cy.get('#sign-up-last-name').click()
        cy.contains('Invalid age').should('be.visible')
        // tests for maximum age of 120
        cy.get('#sign-up-age').clear().type('-1')
        cy.get('#sign-up-last-name').click()
        cy.contains('In order to use Flickr, you must be 13 or older').should('be.visible')
        // test inputting a negative before numbers
        cy.get('#sign-up-age').clear().type('120')
        cy.get('#sign-up-last-name').click()
        cy.contains('In order to use Flickr, you must be 13 or older').should('not.be.visible')
        cy.contains('Invalid age').should('not.be.visible')
        //test the upper range of allowed (120)
        cy.get('#sign-up-age').clear().type('13')
        cy.get('#sign-up-last-name').click()
        cy.contains('In order to use Flickr, you must be 13 or older').should('not.be.visible')
        cy.contains('Invalid age').should('not.be.visible')
        //test the minimum age
        cy.get('#sign-up-age').clear().type('a')
        cy.get('#sign-up-last-name').click()
        cy.contains('Required').should('be.visible')
        //test if the field will accept non numeric input
    })
    it("test Sign Up Email", function(){
        cy.get('#sign-up-email').clear().type('InvalidEmail')
        cy.get('#sign-up-last-name').click()
        cy.contains('Invalid email').should('be.visible')
        //test incorrect email lacking @ 
        cy.get('#sign-up-email').clear().type('InvalidEmail@test')
        cy.get('#sign-up-last-name').click()
        cy.contains('Invalid email').should('be.visible')
        // test incorrect email with @ but no domain
        cy.get('#sign-up-email').clear().type('ValidEmail@valid.com')
        cy.get('#sign-up-last-name').click()  
        cy.contains('Invalid email').should('not.be.visible')
        // test that the correct email format is accepted 
    })
    it("test Sign up Password", function(){
        cy.get('#sign-up-password').type('invalidpass')
        cy.contains('Please use at least:').should('be.visible')
        cy.get('#sign-up-age').click()
        //test password with only 11 characters
        cy.contains('Invalid password').should('be.visible')
        //test that it gives the correct error message when switching from field
        cy.get('#sign-up-password').clear().type(' invalidpass')
        cy.contains('Please use at least:').should('be.visible')
        //test 11 characters with leading space
        cy.get('#sign-up-password').clear().type(' validpasswe2')
        cy.contains('Please use at least:').should('be.visible')
        // test character with 12 but a leading space
        cy.get('#sign-up-age').click()
        cy.contains('Invalid password').should('be.visible')
        
        cy.get('#sign-up-password').clear().type('validpasswe2')
        cy.contains('Please use at least:').should('not.be.visible')
        cy.get('#sign-up-age').click()
        cy.contains('Invalid password').should('not.be.visible')
    })

    it("test Sign up name fields", function(){
        cy.get('#sign-up-age').clear().type(13)
        cy.get('#sign-up-password').clear().type('validpasswe2')
        cy.get('#sign-up-email').clear().type('ValidEmail@valid.com')
        cy.get('#sign-up-first-name').clear().type('Fname')
        cy.get('[data-testid="identity-form-submit-button"]').click()
        cy.contains('Required').should('be.visible')
        //test that you cannot register with an empty Last name field
        cy.get('#sign-up-first-name').clear()
        cy.get('#sign-up-last-name').type('Lname')
        cy.get('[data-testid="identity-form-submit-button"]').click()
        cy.contains('Required').should('be.visible')
        //test that you cannot register with an empty first name field
        cy.get('#sign-up-first-name').clear().type('Lname')
        cy.get('[data-testid="identity-form-submit-button"]').click()
        cy.contains('Check your inbox').should('be.visible')
        //test that correct inputs will redirect to verification page
    })
    it("test Sign Up login redirection", function(){
        cy.get('[data-testid="identity-login-link"]').click()
        cy.contains('Log in to Flicker').should('be.visible')
    })

})  