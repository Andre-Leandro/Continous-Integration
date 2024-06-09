describe('Page Title Verification', () => {
    it('should have the correct title', () => {
      // Visita la URL de la página que quieres probar
      cy.visit('https://continous-integration.onrender.com');
  
      // Verifica que el título de la página sea el esperado
      cy.title().should('eq', 'Suma de Números');
    });
  });
  