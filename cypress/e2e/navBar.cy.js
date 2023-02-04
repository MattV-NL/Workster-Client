describe('click through navbar to the different pages', () => {
  it('clicks through navbar links', () => {
    cy.visit('http://localhost:8000/');
    cy.get('[id=navbar-weather]').click();
    cy.get('[id=navbar-home]').click();
    cy.get('[id=navbar-work]').click();
    cy.get('[id=navbar-about]').click();
    cy.get('[id=navbar-home]').click();
  });
});
