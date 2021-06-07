class explore{
    exploreTitle(){
        return cy.get('.headerRowExplore > h4')
    }
    trendingButton(){
        return cy.get('.containerExplore > :nth-child(1) > :nth-child(2)')
    }
    eventsButton(){
        return cy.get('.containerExplore > :nth-child(1) > :nth-child(3)')
    }
}
export default explore