/// <reference types="cypress" />

let password = Cypress.env("password")
let email = Cypress.env("email")

describe("Testing Albums", () => {
    before("Pre-test: Login...", () => {
        cy.viewport(1366, 768)
        cy.visit("https://identity.flickr.com/account-picker")

        cy.contains("Use another account", { timeout: 10000 }).click()
        cy.get("input[type=email").type(email)
        cy.get("[data-testid=identity-form-submit-button]").click()

        cy.get("input[type=password]", { timeout: 10000 }).type("R/FUdqJn?8hd+L+")
        cy.get("[data-testid=identity-form-submit-button]").click()
        cy.get(".you").click()

    })

    beforeEach("Visiting Albums Page...", () => {
        cy.viewport(1366, 768)
        cy.visit("https://www.flickr.com/photos/192856595@N03/")

    })
    it("TESTING FAVORITES...", () => {
        cy.get("[data-context=explore]").click()
        cy.get(".explore-page-view").should("exist")
        cy.get(".photo-list-photo-interaction:nth(1)").click()
        cy.get(".navigate-target").should("exist")
        cy.get(".animated-fave-star").click()
        cy.visit("https://www.flickr.com/photos/192856595@N03/")
        cy.get("#favorites").click()
        cy.get('.photo-list-photo-interaction').should("have.length", 2)
    })
})