class search{
    bigSearchBar(){
        return cy.get('.Searchbar')
    }
    photosButton(){
        return cy.get('[href="/searchphotos"]')
    }
    peopleButton(){
        return cy.get('[href="/searchpeople"]')
    }
    groupsButton(){
        return  cy.get('[href="/searchgroups"]')
    }
    flickrButton(){
        return cy.get('#appName')
    }
}
export default search