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

it.only("Carousel navigation", () =>{
  //const carouselNextButton = NavPageObj.carouselNextButton;
  //const carouselPreviousButton = NavPageObj.carouselPreviousButton;

  cy.multiclickForCarousel();

})

it("Image validation", () =>{

  cy.carouselValidation();

  //cy.multiclickForCarousel(carouselNextButton);
  //cy.multiclickForCarousel(carouselPreviousButton);


  //let images = [NavPageObj.samsungImage(),NavPageObj.nexusImage()]
  //let arr = [NavPageObj.samsungImage(),NavPageObj.nexusImage()];

//cy.imageValidator(arr[0],carouselNextButton);
})

  it("carousel test",() =>{
        for(let n = 0; n < 10; n ++){
          cy.wait(1000)
          cy.get('.carousel-control-next-icon').click()
        }
      })