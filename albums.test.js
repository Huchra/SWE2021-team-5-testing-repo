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
    it("EDIT ALBUM", () => {
        cy.get("#albums").click()
        cy.get("[data-albumid=72157719177854305]").click()
        cy.get(".photo-list-photo-view").should("have.length", 2)
        cy.get(".album-title").click()
        cy.get(".album-title").should("be.hidden")
        cy.get(".edit-album-title").clear().type("Album_renamed")
        cy.get("[data-action=saveAlbumTitleDescEdit]").click()
        cy.get(".album-title").should('be.visible').contains("Album_renamed")

    })

    // it.skip("adding new Album...", () => {
    //     cy.get(".create-album").click()
    //     cy.get("[title=boulevard]")
    //         .trigger('mousedown', { which: 1 })
    //         .trigger('mousemove', { which: 1, pageX: 1000, pageY: 300 })
    //         .trigger("dragover")
    //         .trigger("dragend")
    //         .trigger("drop")
    //         .trigger("dragexit")
    //         .trigger('mouseup', { which: 1, force: true })
    //     // cy.get("[title=max-asabin-lastr]").drag("#tabl_mats_holder")



    //     cy.get("#one_set_form_title").type("_test")
    //     cy.contains("SAVE").click()
    //     cy.visit("https://www.flickr.com/photos/192856595@N03/albums")
    //     cy.contains("new album_test").should("exist")
    //     cy.get(".album-photo-count.secondary").should('have.text', '2 photos')
    //     cy.contains("new album_test").click()
    //     cy.get(".photo-list-photo-view").should("have.length", 2)

    // })

    // it("EDIT ALBUM", () => {
    //     cy.get("#albums").click()
    //     cy.get("[data-albumid=72157719177854305]").click()
    //     cy.get(".photo-list-photo-view").should("have.length", 2)
    //     cy.get(".album-title").click()
    //     cy.get(".album-title").should("be.hidden")
    //     cy.get(".edit-album-title").clear().type("Album_renamed")
    //     cy.get("[data-action=saveAlbumTitleDescEdit]").click()
    //     cy.get(".album-title").should('be.visible').contains("Album_renamed")

    // })

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

