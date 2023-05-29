import "../support/commands";
import "../support/modules/globalVariables.js";

describe('Carousel suite', () => {
  })

  it("Navigation through carousel", () =>{
    cy.multiclickForCarousel();

})

  it("Images validation", () =>{
    cy.carouselValidation();
})