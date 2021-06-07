class login{
    email(){
       return cy.get(':nth-child(3) > .loginInput')
    }
    password(){
        return cy.get(':nth-child(4) > .loginInput')
    }
    signInButton(){
        return cy.get('.signinButton')
    }
    forgetPasswordButton(){
        return cy.get('[href="/forgot-password"]')
    }
    forgetPasswordEmail()
    {
        return cy.get('.emailInput')
    }
    sendEmailButton()
    {
        return cy.get('.sendemailButton')
    }
}
export default login