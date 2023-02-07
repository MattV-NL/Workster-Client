describe('user login, enter information in to the work form and save information', () => {
  it('navigate to work page, fill form, save data', () => {
    cy.visit('http://localhost:8000/');
    // go to authentication page
    // cy.get('[id=auth-button]').click();

    // //enter username and password
    // cy.get('[id=username-input]').type('guest');
    // cy.get('[id=password-input]').type('guest');

    // //click login button
    // cy.get('[id^=login-button]').click();

    // //click ok button to close modal
    // cy.contains('OK').click();
    //navigate to work page
    cy.get('[id=work-button]').click();

    //fill out form
    cy.get('[id=work-date]')
      .invoke('removeAttr', 'type')
      .type('2023-02-06{enter}');
    cy.get('[id=welding-input]').click();
    cy.get('[id=scaffolding-input]').click();
    cy.get('[id=details-input]').type('some details');
    // cy.get('[id=work-locations-dropdown]').click();
    // cy.get('[table-index=0]').click();

    //enter data
    cy.get('[id=work-button]').click();
  });
});
