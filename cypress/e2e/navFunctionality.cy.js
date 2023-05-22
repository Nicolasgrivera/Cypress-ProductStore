import "../support/commands";
import "../support/modules/globalVariables.js";

describe('Nav suite', () => {
  })

  it('Home menu access', () => {
    cy.accessHome();
  })

  it('AboutUs menu access', () => {
    cy.accessAboutUs()
  })

  it('ContactUs menu access', () =>{
    cy.accessContact()
  })
