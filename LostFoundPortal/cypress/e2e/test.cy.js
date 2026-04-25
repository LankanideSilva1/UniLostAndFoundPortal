describe('Smoke Test', () => {
  it('loads the app', () => {
    cy.visit('/')
    cy.contains('div') // basic check
  })
})
