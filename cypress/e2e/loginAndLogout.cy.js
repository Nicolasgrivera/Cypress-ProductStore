import "../support/commands";
import "../support/modules/globalVariables.js";

//let loginEmail = fixtureFile.email;
//let loginName = fixtureFile.name;
//let loginMessage = fixtureFile.message;

describe('LogIn suite', () => {
})

it('Login user functionality', () => {
  cy.loginUser();
})

it('Login user. Nav correctly changes "sign in" to a welcome message', () => {
  cy.loginUser();
  cy.wait(3000)
  cy.welcomeLoginMessageValidation();
})

it.only('Login user and LogOut. Nav correctly changes "log in" to a Logout', () => {
  cy.loginChangesToLogout()
  cy.logoutChangesToLogin()
})