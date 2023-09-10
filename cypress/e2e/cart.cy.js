import "../support/commands";
import "../support/modules/globalVariables.js";

describe('Cart suite', () => {
  })

  it('Cart Access', () => {
    cy.accessCart();
  })

  it.skip('Add a product to Cart and pop up message validation', () => {
    cy.addCartMessageValidation();
  })

  it.only('Adds a random product to the cart and validates its title, price and places and order.', () =>{
    cy.addRandomItemToCart();
  })