describe('enter information in to the work form', () => {
  it('navigate to work page, fill form, save data', () => {
    cy.visit('http://localhost:8000/');

    //navigate to work page
    cy.get('[id=work-button]').click();

    //fill out form
    cy.get('[id=work-date]')
      .invoke('removeAttr', 'type')
      .type('2023-02-06{enter}');
    cy.get('[id=welding-input]').click();
    cy.get('[id=scaffolding-input]').click();
    cy.get('[id=details-input]').type('some details');

    //enter data
    cy.get('[id=work-button]').click();

    //reset entered info
    cy.get('[id=reset-button]').click();
    cy.contains('OK').click();
  });
});
