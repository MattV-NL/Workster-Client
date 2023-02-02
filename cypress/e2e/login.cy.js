describe('login', () => {
  it('user should be able to login', () => {
    cy.visit('http://localhost:8000/authentication');

    cy.get('[id=username-input]').type('guest');
    cy.get('[id=password-input]').type('guest');

    cy.get('[id^=login-button]').click();
  });
});
