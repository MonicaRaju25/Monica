
///<reference types="cypress-iframe" />
describe('Handle basic elements', () => {
it('Basic Elements',()=>{
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.title().should('include','Practice Page')
     cy.get('input[value="radio2"]').check().should('be.checked')
     cy.get('label input[type="checkbox"]').check(["option1","option3"]).should("be.checked")
     cy.get('select').select('option3').should('have.value','option3')
     cy.get('input#autocomplete').type('au')
     cy.get('.ui-menu-item div').each(($suggestion) => {
          if ($suggestion.text().includes('Australia')) {
               cy.wrap($suggestion).click({ force: true })
             }
           })
           cy.get('input#autocomplete').should('have.value', 'Australia')
           cy.get('a#opentab').invoke('removeAttr', 'target').click()
         })
       })