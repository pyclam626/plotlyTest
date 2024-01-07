/// <reference types="cypress" />

// Using website: https://www.cypress.io/
// Write test for following test cases:
// 1) Users are able to visit the website and able to scroll down to “Loved by OSS, trusted by Enterprise” and see the weekly downloads number.
// 2) User is able to click on Company and then on “About Cypress”
// 3) User is able to click on “Install” and then on “npm install cypress” and make sure the copied text is “npm install cypress --save-dev”
// 4) User is able to click on “Product” and then “visual review”
// Bonus: User is able to click on “Product”, then “Smart Orchestration”, then scroll down to “Test Analytics” and see that the green circle is around “Test Analytics"

describe('Cypress website test', () => {
  beforeEach(() => {
    // Visit Cypress web site in beforeEach function so that it runs before each test
    cy.visit('https://www.cypress.io/')
  })
  /*
  it('can scroll down to find weekly downloads number', () => {
    // Test case 1: Users are able to visit the website and able to scroll down to “Loved by OSS, trusted by Enterprise” and see the weekly downloads number.
    cy.contains('Loved by').scrollIntoView().should('be.visible')
    cy.contains('Weekly downloads').should('be.visible')
    cy.contains('5M+').should('be.visible')
  })
  
  it('can click on About Cypress Company information', () => {
    // Test case 2: User is able to click on Company and then on “About Cypress”
    cy.get('[data-cy="dropdown-company"]').trigger('mouseover')
    cy.contains('About Cypress').click()
    cy.contains('About us').should('be.visible')
  })

  it('can click and copy npm install cypress text', () => {
    // Test case 3: User is able to click on "Install" and then on “npm install cypress” and make sure the copied text is “npm install cypress --save-dev”.
    cy.get('[data-cy="header-install"]').click()
    cy.get('[data-cy="modal-install-copy"]').click()

    // Verify copied text is the same as expected text for “npm install cypress --save-dev”
    cy.assertCopiedValue('npm install cypress --save-dev')
  })

  it('can click on Product and then visual review', () => {
    // Test case 4: User is able to click on “Product” and then “visual review”
    cy.get('[data-cy="dropdown-product"]').trigger('mouseover')
    cy.contains('Visual Reviews').click()
    cy.contains('Review and debug failures visually').should('be.visible')
  })
  */
  it('can see green circle around Test Analytics', () => {
    // Bonus test case: User is able to click on “Product”, then “Smart Orchestration”, then scroll down to “Test Analytics” and see that the green circle is around “Test Analytics".
    cy.get('[data-cy="dropdown-product"]').trigger('mouseover')
    cy.contains('Smart Orchestration').click({force: true})
    
    cy.get('#test_analytics').scrollIntoView({ offset: {top: 0, left: 0 } }).should('be.visible')
    // Verify green cirle around "Test Analytics"
    cy.get('.hidden > .border-jade-200').should('contain','Test Analytics')
  })

  // Function to verify clipboard copied value
  Cypress.Commands.add('assertCopiedValue', value => {
    cy.window().then(win => {
      win.navigator.clipboard.readText().then(text => {
        expect(text).to.eq(value)
      })
    })
  })
})
