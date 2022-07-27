//---- PO import and json data  ----//
import navPageObj from "./pageObjects/navPageObj";

let NavPageObj;
let testData;

beforeEach(()=> {
    cy.fixture('user.json').then(function(dataJson) {
      testData = dataJson;
    })
    cy.visit("/");
    NavPageObj = new navPageObj
})

//---- Menu access ----//

Cypress.Commands.add('accessHome', () => {
    NavPageObj.home().click();
})

Cypress.Commands.add('accessContact', () => {
    NavPageObj.contact().click();
})

Cypress.Commands.add("accessAboutUs", () => {
    NavPageObj.aboutUs().click();
})

//---- About us Video validation----//

Cypress.Commands.add("validateVideoName", () => {
    NavPageObj.aboutUsVideoName()
    .should('contain', 'About us');
})

Cypress.Commands.add("validateVideo", () =>{
    NavPageObj.aboutUsVideo()
    .should('have.prop', 'paused', true)
    .and('have.prop', 'ended', false)
    .then(($video) =>{
        $video[0].play()
    })
})

//---- Contact form validations  ----//

Cypress.Commands.add("contactValidation", (input,userInformation) =>{
/*
    const inputEmail = NavPageObj.contactEmail();
    const inputName = NavPageObj.contactName();
    const inputMessage = NavPageObj.contactMessage();
  
    const userEmail = testData.email
    const userName = testData.name;
    const userMessage = testData.message;
*/
    input(input).should("exist").click().type(userInformation).should('have.value', userInformation)
})
Cypress.Commands.add("validateEmailInput", () => {
    cy.wait(2000);
    NavPageObj.contactEmail().should("exist").click().type(testData.email).should('have.value', testData.email);
})

Cypress.Commands.add("validateNameInput", () => {
    NavPageObj.contactName().should("exist").click().type(testData.name).should('have.value', testData.name);
})

Cypress.Commands.add("validateMessageInput", () => {
    NavPageObj.contactMessage().should("exist").click().type(testData.message).should('have.value', testData.message)
})
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })