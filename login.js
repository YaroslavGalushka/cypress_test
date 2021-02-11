it('Login flow', () => {
  cy.visit('https://react-redux.realworld.io/#/login')
  cy.get(':nth-child(1) > .form-control').type('terapaka@gmail.com')
  cy.get(':nth-child(2) > .form-control').type('1234567890')
  cy.get('.btn').click()
  cy.get(':nth-child(4) > .nav-link').contains('TERAPAKA').should('exist')
})