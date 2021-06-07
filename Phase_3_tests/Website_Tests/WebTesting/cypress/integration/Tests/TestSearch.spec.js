import logIn from '../pageObjects/login'
import Search from '../pageObjects/search'
import homePage from '../pageObjects/homePage'

describe('test Search', function()
 { 
  const login = new logIn()
  const homepage = new homePage()
  const search = new Search()
  let userDetails
  beforeEach(function(){
    cy.visit('https://fotone.me/login')
    cy.contains('Log in to Flickr',{ timeout: 10000 }).should('be.visible')
    cy.url().should('include','/login')
    cy.fixture('userLoginDetails').then((user)=>{
      userDetails=user
    })
    })
    it('Search',function()
    {
        cy.viewport(1300, 660)
        //Log in
        login.email().type(userDetails.email)
        login.password().type(userDetails.password)
        login.signInButton().click()
        cy.get('.advertise',{timeout: 10000}).should('be.visible')
        //Search
        homepage.searchBar().should('be.visible')
        homepage.searchButton().click()
        search.bigSearchBar().should('be.visible')
        search.photosButton().click()
        cy.url().should('include','/searchphotos',{ timeout: 10000 })
        search.peopleButton().click()
        cy.url().should('include','/searchpeople',{ timeout: 10000 })
        search.groupsButton().click()
        cy.url().should('include','/searchgroups',{ timeout: 10000 })
        //return back to home
        search.flickrButton().click()
        cy.url().should('include','/Home')
    })
})