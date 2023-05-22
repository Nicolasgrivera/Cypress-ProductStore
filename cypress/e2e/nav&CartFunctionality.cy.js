import navPageObj from "../support/pageObjects/navPageObj";

import "../support/commands";
import "../support/modules/globalVariables.js";
import fixtureFile from '../fixtures/user.json';
import loginPageObj from "../support/pageObjects/loginPageObj";

let NavPageObj;
let LoginPageObj;

LoginPageObj = new loginPageObj
NavPageObj = new navPageObj

describe('Nav', () => {
  })

  it('Home', () => {
    cy.accessHome();
  })

  it.only('Contact send data validation', () => {
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

  it('Create user functionality', ()=>{
    cy.createRandomUser()
  })

it("Carousel navigation", () =>{

  cy.multiclickForCarousel();

})

it("Image validation", () =>{

  cy.carouselValidation();

})