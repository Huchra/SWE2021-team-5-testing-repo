describe('TestGroups', function()
{
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  it('Groups', function() 
    {
      cy.visit('https://www.flickr.com/')

      cy.get('.gn-signin > .gn-title').click()
      .get('[data-testid=identity-email-input]').type("testing.swproject@gmail.com")
      .get('[data-testid=identity-form-submit-button] > .user-select-none').click()
      .get('[data-testid=identity-password-input]').type("testingsw2021")
      .get('[data-testid=identity-form-submit-button] > .user-select-none').click()
      .wait(1000)
      .get('.gn-tools > .gn-search-box').should('be.visible').click().type("Flickr")
      .get('label > .icon').click()
      .wait(1000)
      .get('[data-id="groups"] > a > .title').click()
      .wait(1000)
      .get('#groups-results-my > .result-card > .sizer-cropper > .click-anywhere').click()
      .wait(1000)
      .get('#overview > a').click()
      .wait(5000)
      .get('#discussions > a').click()
      .wait(5000)
      .get('#members > a').click()
      .wait(5000)
      .get('#invite > a').click()
      .wait(3000)
      .get('.refresh-logo-2013').click()
      
    })
})