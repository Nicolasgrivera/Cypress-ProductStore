import "../support/commands";
import "../support/modules/globalVariables.js";

describe('AboutUs suite', () => {
  })

  it('AboutUs video validation', () => {
    cy.accessAboutUs();
    cy.validateVideoName();
    cy.validateVideo();
  })