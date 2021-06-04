import SignUp from '../pageObjects/signUp'
/// <reference types="cypress-mailslurp" />

describe("test Sign Up on web", function(){
    const signUp = new SignUp()
    //using the PoM model for the current page
    const password = "test-password";
    let inboxId;
    let emailAddress;
    //using mailslurp to automate the email send verification

   this.beforeEach(function(){
        cy.visit("https://fotone.me/")
        signUp.startButton().click()
        cy.contains('Sign up for Flickr').should('be.visible')
        signUp.age().type("20")
        signUp.lastName().click().type("lastName")
        signUp.firstName().click().type("firstName")
        signUp.email().type("valid@emailaddress.com")
        signUp.password().type("validPasswordEntry")
    })

    it("test Sign Up age 12", function(){
        signUp.age().clear().type("12")
        signUp.signUpButton().click()
        cy.contains('In order to use Flickr, you must be 13 or older').should('be.visible')
        //test that the lower limit of 13 years is enforced
    })
    it("test Sign Up age 120", function(){
        signUp.age().clear().type('120')
        signUp.signUpButton().click()
        cy.contains('Invalid age').should('not.be.visible')
    })
    it ("test Sign Up age 13", function (){
        signUp.age().clear().type('13')
        signUp.password().clear().type('invalid')
        signUp.signUpButton().click()
        cy.contains('In order to use Flickr, you must be 13 or older').should('not.be.visible')
        //test edge (12 -> 13) age
    })
    it("test Sign Up age -1", function(){
        signUp.age().clear().type('-1')
        signUp.signUpButton().click()
        cy.contains('Invalid age').should('be visible')
        //test out of bounds age
    })
    it("test sign Up Age 121", function() {
        signUp.age().clear().type('121')
        signUp.signUpButton().click()
        cy.contains('Invalid age').should('be visible')
        //test that the upper limit of 120 years is enforced
    })
    it("test sign up invalid type", function(){
        signUp.age().clear().type('a')
        signUp.signUpButton().click()
        cy.contains('Required').should('be visible')
    })
    it("test Sign Up Email invalid @", function(){
        signUp.email().clear().type('InvalidEmail')
        signUp.signUpButton().click()
        cy.contains('Invalid email').should('be.visible')
        //test incorrect email lacking @
    })
    it("test Sign Up Email invalid domain", function() {

          signUp.email().clear().type('InvalidEmail@test')
          signUp.signUpButton().click()
          cy.contains('Invalid email').should('be.visible')
          // test incorrect email with @ but no domain
    })
    it("test Sign Up Email valid", function(){
        signUp.email().clear().type('InvalidEmail')
        signUp.signUpButton().click()
        cy.contains('Invalid email').should('be.visible')
        //test incorrect email lacking @
    })
    it("test Sign Up Email valid", function(){
        signUp.email().clear().type('ValidEmail@valid.com')
        signUp.age().clear()
        signUp.signUpButton().click()
        cy.contains('Invalid email').should('not.be.visible')
        // test that the correct email format is accepted
    })
    it("test Sign up Password invalid 11 characters", function(){
        signUp.password().clear().type('invalidpass')
        signUp.signUpButton().click()
        cy.contains('Please use at least: 12 characters').should('be.visible')
        //test password with only 11 characters
    })
    it("test Sign Up password with leading space and invalid charact5ers", function(){
         //test 11 characters with leading space
         signUp.password().clear().type(' validpasswe2')
         signUp.signUpButton.click()
         cy.contains('Please use at least: 12 characters').should('be.visible')
    })
    it("test Sign Up with 12 charactesr but leading password", function(){
        // test character with 12 but a leading space
        signUp.password().clear().type('validpasswe2')
        signUp.signUpButton().click()
        cy.contains('Invalid password').should('be.visible')
    })
    it("test Sign Up valid password", function(){
        signUp.password().clear().type('validpasswe2')
        signUp.age().click()
        cy.contains('Invalid password').should('not.be.visible')
    })
    it("test Sign up name fields", function(){
        signUp.age().clear().type(13)
        signUp.password().clear().type('validpasswe2')
        signUp.email().clear().type('ValidEmail@valid.com')
        signUp.firstName().clear().type('Fname')
        signUp.signUpButton().click()
        cy.contains('Required').should('be.visible')
        //test that you cannot register with an empty Last name field
        signUp.firstName().clear()
        signUp.lastName().type('Lname')
        signUp.signUpButton().click()
        cy.contains('Required').should('be.visible')
        //test that you cannot register with an empty first name field
        signUp.firstName().clear().type('Lname')
        signUp.signUpButton().click()
        cy.contains('Check your inbox').should('be.visible')
        //test that correct inputs will redirect to verification page()
    })
    it("test Sign up, create and account and verify it.", function(){
        cy.createInbox().then((inbox) => {
            assert.isDefined(inbox);
            //assert email address creation
            inboxId = inbox.id;
            emailAddress = inbox.emailAddress;
            //create an account with the mailSlurp service.
            signUp.email().clear().type(emailAddress);
            signUp.password().clear().type(password);   
            signUp.signUpButton().click()
            cy.waitForLatestEmail(inboxId).then((email) =>{
                assert.isDefined(email);
    
                assert.strictEqual(/Confirm my Flickr account/.test(email.body), true);
            })
        })
    })
})
