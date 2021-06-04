class signUp{
    email(){
       return cy.get('[name="email"]')
    }
    age(){
        return cy.get('[name="age"]')
    }
    lastName(){
        return cy.get('[name="last_name"]')
    }
    password(){
       return cy.get('[name="password"]')
    }
    signUpButton(){
       return cy.get('[type="submit"]')
    }
    firstName(){
        return cy.get('[name="first_name"]')
    }
    signUpLoginLink(){
        return cy.get('[data-testid="identity-login-link"]')
    }
    startButton(){
        return cy.get('.startForFreeButton')
    }
    resendEmail(){
        return cy.get('[type="submit"]')
    }
}

export default signUp