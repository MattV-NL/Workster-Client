describe('login', () => {
  it('user should be able to login', () => {
    cy.visit('http://localhost:8000/authentication');

    //enter username and password
    cy.get('[id=username-input]').type('guest');
    cy.get('[id=password-input]').type('guest');

    //click login button
    cy.get('[id^=login-button]').click();

    //click ok button to close modal
    cy.contains('OK').click();
  });
});
