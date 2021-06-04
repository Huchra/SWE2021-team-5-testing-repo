class homePage {
    email() {
        return cy.get("[data-testid=identity-email-input]", {timeout: 100000})
    }
    chooseButton() {
        return  cy.get("[data-testid=identity-form-submit-button]")
    }
    logInPassword() {
        return  cy.get("input[type=password]", { timeout: 10000 })
    }
    signInButton() {
        return  cy.get('[data-testid="identity-form-submit-button"]')
    }
    homePageButton() {
        return cy.get('.you', {timeout: 100000})
    }
    feedContent() {
        return cy.get('.class="feed-column-content')
    }
    largeIconButton(){
        return  cy.get('[data-layout-type="large]')
    }
    firstVisiblePhoto(){ 
        return cy.get('.class="photo-link no-outline')
    }
}