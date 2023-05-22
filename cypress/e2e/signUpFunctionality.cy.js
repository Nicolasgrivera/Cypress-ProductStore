import "../support/commands";
import "../support/modules/globalVariables.js";

describe('SignUp suite', () => {
  })

  it('Create user functionality', ()=>{
    cy.createRandomUser()
  })

  it.only('Create already user functionality', ()=>{
    cy.createAlreadyRegisteredUser()
  })