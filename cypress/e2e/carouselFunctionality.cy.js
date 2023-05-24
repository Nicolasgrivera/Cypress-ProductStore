import "../support/commands";
import "../support/modules/globalVariables.js";

describe('Carousel suite', () => {
  })

  it("Carousel navigation", () =>{
    cy.multiclickForCarousel();

})

  it.only("Image validation", () =>{
    cy.carouselValidation();

})