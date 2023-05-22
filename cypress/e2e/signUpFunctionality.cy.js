import "../support/commands";
import "../support/modules/globalVariables.js";

describe('SignUp suite', () => {
  })

  it.only('Sign up title', () => {
    cy.signUpTitle()
  })

  it('Create user functionality', ()=>{
    cy.createRandomUser()
  })

  it('Create already user functionality', ()=>{
    cy.createAlreadyRegisteredUser()
  })