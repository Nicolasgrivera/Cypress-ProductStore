import navPageObj from "../support/pageObjects/navPageObj";
import "../support/Commands"
import "../support/modules/globalVariables.js"
import fixtureFile from '../fixtures/user.json'

let NavPageObj = new navPageObj

describe('Nav', () => {
  })

  it('Home', () => {
    cy.accessHome();
  })

  it('Contact send data validation', () => {
    cy.contactWholeValidation();
  })

  it('AboutUs', () => {
    cy.accessAboutUs();
    cy.validateVideoName();
    cy.validateVideo();
  })

  it('Cart functionality', () => {
    cy.cartFunctionalityValidation();
  })

  it.only('Create user functionality', ()=>{
    cy.createRandomUser()
  })