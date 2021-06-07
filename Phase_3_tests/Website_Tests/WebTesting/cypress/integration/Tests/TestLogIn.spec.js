import logIn from '../pageObjects/login'

describe('test Log In', function()
 { 
  const login = new logIn()
  let userDetails
  beforeEach(function(){
    cy.visit('https://fotone.me/login')
    cy.contains('Log in to Flickr',{ timeout: 10000 }).should('be.visible')
    cy.url().should('include','/login')
    cy.fixture('userLoginDetails').then((user)=>{
      userDetails=user
    })
  })
  it('empty Email/Password', function() 
  {
    login.signInButton().should('be.visible').click()
    cy.contains('Required',{ timeout: 10000 }).should('be.visible')
  })
  it('invalid Email/Password', function() 
  {
    login.email().type(userDetails.notEmail)
    login.password().type(userDetails.notPassword)
    login.signInButton().click()
    //cy.contains('Invalid email or password.',{ timeout: 10000 }).should('be.visible')
    cy.contains('invalid password',{ timeout: 10000 }).should('be.visible')
    cy.contains('invalid email',{ timeout: 10000 }).should('be.visible')
  })
  it('wrong Email',function(){
    login.email().type(userDetails.wrongEmail)
    login.password().type(userDetails.password)
    login.signInButton().click()
    cy.contains('Invalid email or password.',{timeout:5000}).should('be.visible')
  })
  it('wrong Password', function() 
  {
    login.email().type(userDetails.email)
    login.password().type(userDetails.notPassword)
    login.signInButton().click()
    cy.contains('invalid password',{ timeout: 10000 }).should('be.visible')
  })
  it('valid Email/Password', function ()
  {
    login.email().type(userDetails.email)
    login.password().type(userDetails.password)
    login.signInButton().click()
    cy.get('.advertise').should('be.visible')
  })
  it('forget password',function()
  {
    login.forgetPasswordButton().click()
    cy.contains('Change your Flickr password',{timeout: 10000}).should('be.visible')
    cy.url().should('include','/forgot-password')
    //invalid email
    login.forgetPasswordEmail().type(userDetails.notEmail)
    login.sendEmailButton().click()
    cy.contains('invalid email',{ timeout: 10000 }).should('be.visible')
    //valid email
    login.forgetPasswordEmail().clear().type(userDetails.email)
    login.sendEmailButton().click()
    cy.contains('Check your inbox',{timeout: 10000}).should('be.visible')
    cy.url().should('include','/check-email/forgot-password')
  })
})