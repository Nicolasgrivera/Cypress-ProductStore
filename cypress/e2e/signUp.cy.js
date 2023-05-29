import "../support/commands";
import "../support/modules/globalVariables.js";

describe('SignUp suite', () => {
  })

  it('Sign up title', () => {
    cy.signUpTitle()
  })

  it('Create user functionality', ()=>{
    cy.createRandomUser()
  })

  it.only('Error validation when trying to create an account with an already registered username', ()=>{
    cy.createAlreadyRegisteredUser()
  })

  it.only('Error validation when trying to create an account without user name', ()=>{
    cy.createUserWithoutUsername()
  })

  it.only('Error validation when trying to create an account without password', ()=>{
    cy.createUserWithoutPassword()
  })
