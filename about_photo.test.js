/// <reference types="cypress" />


let password = Cypress.env("password")
let email = Cypress.env("email")
console.log(password)

describe("Profile Test", () => {
    before("Pre-test: Login...", () => {
        cy.viewport(1366, 768)
        cy.visit("https://identity.flickr.com/account-picker")

        cy.contains("Use another account", { timeout: 10000 }).click()
        cy.get("input[type=email").type("mohamed84348@gmail.com")
        cy.get("[data-testid=identity-form-submit-button]").click()

        cy.get("input[type=password]", { timeout: 10000 }).type("R/FUdqJn?8hd+L+")
        cy.get("[data-testid=identity-form-submit-button]").click()
        cy.get(".you").click()

    })

    beforeEach(() => {
        cy.viewport(1366, 768)
        cy.visit("https://www.flickr.com/photos/192856595@N03/")
    })

    it("Testing About Page...", () => {

        cy.get("#about").click()

        cy.contains("I am Mohamed Sayed").should("exist")

        cy.contains("Joined").should("exist")
    })

    //photostream-content-container
    it("Testing PhotoStream", () => {
        // cy.get(".mini", { timeout: 30000, log: false }).click()
        cy.get("#photostream").click()
        cy.get(".photostream-content-container").should("exist")
        cy.get(".photo-list-photo-view").should("have.length", 4)
    })
    //data-group-nsid="14762483@N20"


})


