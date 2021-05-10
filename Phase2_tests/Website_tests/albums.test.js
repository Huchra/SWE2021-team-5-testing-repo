/// <reference types="cypress" />

let password = Cypress.env("password")
let email = Cypress.env("email")

describe("Testing Albums", () => {
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

        Cypress.Cookies.preserveOnce(['cookie_session', '_sp_id.df80'], 'remember_token')
    })


    it("Rename & Delete ALBUM", () => {
        cy.visit("https://www.flickr.com/photos/192856595@N03/albums")
        cy.get('.photo-list-album-interaction:nth(0)').click()
        cy.get(".photo-list-photo-view").should("have.length", 2)
        cy.get(".album-title").click()
        cy.get(".album-title").should("be.hidden")
        cy.get(".edit-album-title").clear().type("Album_renamed")
        cy.get("[data-action=saveAlbumTitleDescEdit]").click()
        cy.get(".album-title").should('be.visible').contains("Album_renamed")

        // Album Deletion
        cy.log(".....Testing The Deletion.....")
        cy.wait(3000)
        cy.visit("https://www.flickr.com/photos/192856595@N03/albums")
        // cy.get(".photo-list-album-view:nth(1)")
        //     .trigger("mouseover")
        //     .trigger("dragover")
        //     .trigger("dragend")
        //     .trigger("drop")
        cy.get(".photo-list-album-view:nth(1) .trash").click({ force: true })
        cy.get(".action").click()
        cy.get(".photo-list-album-view").should("have.length", 1)

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
})

