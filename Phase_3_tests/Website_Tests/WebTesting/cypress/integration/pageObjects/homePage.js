class homePage{
    searchBar(){
       return cy.get('.form-control',{ timeout: 10000 })
    }
    searchButton(){
        return cy.get('#basic-addon1 > svg')
    }
    exploreButton(){
        return cy.get('.links > :nth-child(1) > .dropbtn')
     }
}
export default homePage