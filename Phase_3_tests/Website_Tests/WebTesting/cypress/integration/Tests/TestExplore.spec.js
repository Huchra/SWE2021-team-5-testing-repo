import Explore from '../pageObjects/explore'
import logIn from '../pageObjects/login'
import homePage from '../pageObjects/homePage'

describe('test Explore Page', function()
{ 
    const explore = new Explore()
    const login = new logIn()
    const homepage = new homePage()
    //let userDetails
    
    it("Explore Button",function(){

        cy.visit('https://fotone.me/login')
        cy.contains('Log in to Flickr',{ timeout: 10000 }).should('be.visible')
        cy.url().should('include','/login')
        //Log in
        cy.fixture('userLoginDetails').then((user)=>{
            login.email().type(user.email)
            login.password().type(user.password)
        })
        login.signInButton().click()
        cy.get('.advertise',{timeout: 10000}).should('be.visible')
        //Explore
        homepage.exploreButton().click()
        cy.contains('Explore',{ timeout: 10000 }).should('be.visible')
        cy.url().should('include','/explore',{timeout: 5000})
        explore.exploreTitle().should('be.visible',{timeout:50000})
        explore.trendingButton().click()
        cy.contains('Trending Tags — Now',{ timeout: 5000 }).should('be.visible')
        cy.url().should('include','/photos/tags',{ timeout: 10000 })
        explore.eventsButton().click()
        cy.contains('Upcoming Events',{ timeout: 5000 }).should('be.visible')
        cy.url().should('include','/events',{ timeout: 10000 })
    })
    
    it("Using URL",function()
    {
        cy.visit('https://fotone.me/explore')
        explore.exploreTitle().should('be.visible',{timeout:50000})
        explore.trendingButton().click()
        cy.contains('Trending Tags — Now',{ timeout: 5000 }).should('be.visible')
        cy.url().should('include','/photos/tags',{ timeout: 10000 })
        explore.eventsButton().click()
        cy.contains('Upcoming Events',{ timeout: 5000 }).should('be.visible')
        cy.url().should('include','/events',{ timeout: 10000 })
    })

})