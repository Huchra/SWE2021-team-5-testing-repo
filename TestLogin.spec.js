describe('TestLogin', function()
 {
    
    it('log in with empty email', function() 
    {
      cy.visit('https://www.flickr.com/')

      cy.get('.gn-signin > .gn-title').click()
      .get('[data-testid=identity-email-input]').type(" ")
      .get('[data-testid=identity-form-submit-button] > .user-select-none').click()
      .wait(2500)
      .get('.message-container > .ma-0')
    })
    it('log in with wrong email', function() 
    {
      cy.visit('https://www.flickr.com/')

      cy.get('.gn-signin > .gn-title').click()
      .get('[data-testid=identity-email-input]').type("testing.swproject123@gmail.com")
      .get('[data-testid=identity-form-submit-button] > .user-select-none').click()
      .get('[data-testid=identity-password-input]').type("testingsw2021")
      .get('[data-testid=identity-form-submit-button] > .user-select-none').click()
      .wait(2500)
      .get('[data-testid=identity-error-alert]')
    })
    it('log in with wrong password', function() 
    {
      cy.visit('https://www.flickr.com/')

      cy.get('.gn-signin > .gn-title').click()
      .get('[data-testid=identity-email-input]').type("testing.swproject@gmail.com")
      .get('[data-testid=identity-form-submit-button] > .user-select-none').click()
      .get('[data-testid=identity-password-input]').type("testingsw202123")
      .get('[data-testid=identity-form-submit-button] > .user-select-none').click()
      .wait(2500)
      .get('.message-container > .ma-0')
    })
    it('log in with valid credentials', function() 
    {
      cy.visit('https://www.flickr.com/')

      cy.get('.gn-signin > .gn-title').click()
      .get('[data-testid=identity-email-input]').type("testing.swproject@gmail.com")
      .get('[data-testid=identity-form-submit-button] > .user-select-none').click()
      .get('[data-testid=identity-password-input]').type("testingsw2021")
      .get('[data-testid=identity-form-submit-button] > .user-select-none').click()
    })
    it('Forget/Reset password', function() 
    {
      cy.visit('https://www.flickr.com/')

      cy.get('.gn-signin > .gn-title').click()
      .get('[data-testid=identity-email-input]').type("testing.swproject@gmail.com")
      .get('[data-testid=identity-form-submit-button] > .user-select-none').click()
      .wait(1000)
      .get('.flex > :nth-child(1) > .text-center > a').click()
      .wait(500)
      .url().should('include','/forgot-password')
      .get('[data-testid=identity-form-submit-button]').click()
      .wait(500)
      .get('[data-testid=identity-form-submit-button]').click()
      .wait(500)
      .url().should('include','/check-email/forgot-password')
    })
})