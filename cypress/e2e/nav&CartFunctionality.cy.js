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

  it('Create user functionality', ()=>{
    cy.createRandomUser()
  })

it.only("carouselwithcommand", () =>{
  const carouselNextButton = NavPageObj.carouselNextButton;
  const carouselPreviousButton = NavPageObj.carouselPreviousButton;
  
  cy.multiclickForCarousel(carouselNextButton);
  cy.multiclickForCarousel(carouselPreviousButton);
  /*for(let n = 0; n < 10; n ++){
    cy.wait(1000)
    const a = NavPageObj.carouselNextButton;
    a()
  }
*/


  /*
  for(let n = 0; n < 10; n ++){
    let carouselNextButton = NavPageObj.carouselNextButton;
    let carouselPreviousButton = NavPageObj.carouselPreviousButton

    let element = function elementToClick(){
        carouselNextButton.trigger("click");
        carouselPreviousButton.click();
        cy.wait(1000)
  }}
  let carouselNextButton = NavPageObj.carouselNextButton;
  let carouselPreviousButton = NavPageObj.carouselPreviousButton
  cy.MulticlickForCarousel(carouselNextButton);
  */

  //cy.MulticlickForCarousel(carouselPreviousButton);
})

  it("carousel test",() =>{
        for(let n = 0; n < 10; n ++){
          cy.wait(1000)
          cy.get('.carousel-control-next-icon').click()
        }
      })