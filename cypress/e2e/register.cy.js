describe('register', () => {
  it('will try to register a new user but fail because guest already exists', () => {
    cy.visit('http://localhost:8000/authentication');

    //enter username, password, email
    cy.get('[id=username-input-reg]').type('guest');
    cy.get('[id=password-input-reg]').type('guest');
    cy.get('[id=email-input]').type('guest@email.ca');

    //click register button
    cy.get('[id^=reg-button]').click();

    //click ok button to close modal
    cy.contains('OK').click();
  });
});
