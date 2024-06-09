describe('Title Test', () => {
    it('Should have the correct title', () => {
      cy.visit('/')
      cy.title().should('eq', 'Mono')
    })
  })
  