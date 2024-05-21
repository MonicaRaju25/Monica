///<<refernce types="cypress"/>

describe('template spec', () => {

 beforeEach(()=>{
  cy.visit('https://practicetestautomation.com/practice-test-login/')
 })
  it('Positive LogIn test', () => {
    cy.wait(5000)
    cy.get("#username").eq(0).type("student")
    cy.get('input[type="password"]').type("Password123")
    cy.get('button[class="btn"]').click()
    cy.url().should('include','practicetestautomation.com/logged-in-successfully/')
    cy.get('strong').should('have.text','Congratulations student. You successfully logged in!')
    cy.get('.wp-block-button a').should('be.visible')
  })
  it('Negative username test', () => {
    cy.wait(5000)
    cy.get("#username").eq(0).type("incorrectuser")
    cy.get('input[type="password"]').type("Password123")
    cy.get('button[class="btn"]').click()
    cy.get("#error").should('have.text','Your username is invalid!')
})
it('Negative password test', () => {
  cy.wait(5000)
  cy.get("#username").eq(0).type("student")
  cy.get('input[type="password"]').type("incorrectpassword")
  cy.get('button[class="btn"]').click()
  cy.get("#error").should('have.text','Your password is invalid!')
})
})