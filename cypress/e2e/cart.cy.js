import "../support/commands";
import "../support/modules/globalVariables.js";

describe('Cart suite', () => {
  })

  it('Cart Access', () => {
    cy.accessCart();
  })

  it('Add a product to Cart and pop up message validation', () => {
    cy.addCartMessageValidation();
  })

  it('Adds a random product to the cart and validates its title, price and places an order.', () =>{
    cy.addRandomItemToCart();
  })

  it.only('place an order', () =>{
    cy.placeAnOrder();
  })

  it.only('testing', () =>{
    console.log('Message 1');
    setTimeout(()=>{
      console.log('Async code...')
    },500);
    console.log('Message 2');
  })

  it.only('testing 2', () =>{

    let arr = ["test", "testing", "tester"];

    setTimeout(()=>{
      console.log("el array ahora tiene " +arr.length + " elementos")
    }, 100)

    console.log(arr + " El array tiene " +arr.length + " elementos cuando inicia");
    arr.push("nico");
    arr.push("nico");

    let promise2 = new Promise((resolve, reject) =>{
      reject(new Error('There is something wrong. test'))
      resolve("I am done testing.")
    })

    promise2.then(
      (reject) =>{
        console.log(reject);
      }
    )

    let promise = new Promise((resolve, reject)=>{
      resolve("I am done.")
    })

    promise.then((resolve) =>{
      console.log(resolve);
    })

    promise2.catch(error => console.log(error));

    console.log('Message 5');

  })

