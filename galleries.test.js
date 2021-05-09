/// <reference types="cypress" />

let password = Cypress.env("password")
let email = Cypress.env("email")

describe("Testing Albums", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
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

    beforeEach("Visiting Albums Page...", () => {
        cy.viewport(1366, 768)
        cy.visit("https://www.flickr.com/photos/192856595@N03/")

    })
    it("Galleries Test...", () => {
        cy.get("#galleries").click()
        cy.log("Checking existing Gallery")
        cy.get(".click-target").should("be.visible")
        cy.contains("Landscape").should("exist")
        cy.get('.gallery-title > a').should("have.text", "Landscape")
        cy.get('.total-count').should("have.text", "1 gallery")

        cy.log("Creating New Gallery")
        cy.wait(3000)
        cy.log("Adding New Gallery")
        cy.get(".new-gallery-button > .icon").click({ force: true })
        cy.get('.input-item > .input-field').type("New_gallery")
        cy.get('.stuff-creation-description').type("random Description")
        cy.get('.button-action').click()
        cy.get(".photo-list-gallery-container").should("have.length", 2)

        cy.log(".... Adding Photos to Gallery....")
        cy.wait(3000)
        cy.get(".photo-list-gallery-container:nth(0)").click()
        cy.get(".empty-state-content > .large").click()
        cy.wait(2000)
        cy.get('.photo-list-photo-interaction').click({ force: true })
        cy.get('.button-container > .action').click()
        cy.get(".stat.photo-count").should("have.text", "1 item")

        // Deleting Gallery
        cy.log(".... Deleting Gallery....")
        cy.wait(3000)
        cy.get('.edit').click()
        cy.get('.delete-button').click()
        cy.get('.confirm-button').click()
        cy.get(".photo-list-gallery-container").should("have.length", 1)

        //.empty-state-content > .large



    })
})