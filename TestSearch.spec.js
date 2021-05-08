describe('TestSearch', function()
{
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  it('Search', function() 
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
      .get('[data-id="people"] > a > .title').click()
      .wait(2000)
      .get('[data-id="groups"] > a > .title').click()
    
    })
})

