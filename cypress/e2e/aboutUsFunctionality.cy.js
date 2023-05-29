import "../support/commands";
import "../support/modules/globalVariables.js";

describe('AboutUs suite', () => {
  })

  it('AboutUs access', () => {
    cy.accessAboutUs();
  })

  it('AboutUs video name validation', () => {
    cy.accessAboutUs();
    cy.validateVideoName();
  })
  

  it('AboutUs video validation', () => {
    cy.accessAboutUs();
    cy.validateVideoName();
    cy.validateVideo();
  })