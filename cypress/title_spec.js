describe('Title Test', () => {
    it('Should have the correct title', () => {
      cy.visit('https://continous-integration.onrender.com')
      cy.title().should('eq', 'Mono')
    })
  })
  