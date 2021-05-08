describe('TestNotifications', function()
 {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

    it('Notifications', function() 
    {
      cy.visit('https://www.flickr.com/')

      .get('.gn-signin > .gn-title').click()
      .get('[data-testid=identity-email-input]').type("testing.swproject@gmail.com")
      .get('[data-testid=identity-form-submit-button] > .user-select-none').click()
      .get('[data-testid=identity-password-input]').type("testingsw2021")
      .get('[data-testid=identity-form-submit-button] > .user-select-none').click()
      .wait(2000)
      .get('.c-notification-icon').click()

    })
 })
