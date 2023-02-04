describe('user will get weather data from manual input', () => {
  it('runs through process of getting weather data', () => {
    cy.visit('http://localhost:8000/');

    //click weather Link in navbar
    cy.get('[id=weather-button]').click();

    //enter latitude and longitude
    cy.get('[id=latitude-input]').type(0);
    cy.get('[id=longitude-input]').type(0);
    cy.get('[id=weather-button]').click();
  });
});
