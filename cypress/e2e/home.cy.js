describe('Home', () => {
  it('Visitando a home do site', () => {
    cy.visit('https://petlov.vercel.app/')

    cy.get('h1').should('have.text', 'Conectando corações, mudando vidas!')
  })
})