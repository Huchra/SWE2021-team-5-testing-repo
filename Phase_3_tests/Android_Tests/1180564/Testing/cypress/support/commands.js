import 'cypress-file-upload'


Cypress.Commands.add("SignIn", () =>{
    cy.visit('http://react-redux.realworld.io/#/login?_k=zn64tn')
    cy.title().should('eq', 'Conduit')
    cy.location('protocol').should('eq', 'http:')
    cy.get('form').within(($form) => {
        cy.get('input[type="email"]').type('kbt21556@cuoly.com')
        cy.get('input[type="password"]').type('d91c0503')
        cy.root().submit()

    })
    //cy.get('input[type="email"]').type('kbt21556@cuoly.com')
    //cy.get('input[type="password"]').type('d91c0503')
    //cy.get('.btn').contains('Sign in').should('be.visible').click()
    cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
})

const { MailSlurp } = require("mailslurp-client");

const apiKey = "285d528b4e5b8f3e14315b094993b381aa37306756fcae6e82afad75b0dfd0d5";
const mailslurp = new MailSlurp({ apiKey });

Cypress.Commands.add("createInbox", () => {
  // instantiate MailSlurp
  const mailslurp = new MailSlurp({ apiKey: Cypress.env("MAILSLURP_API_KEY") });
  // return { id, emailAddress } or a new randomly generated inbox
  return mailslurp.createInbox();
});
Cypress.Commands.add("waitForLatestEmail", (inboxId) => {
    return mailslurp.waitForLatestEmail(inboxId);
  });