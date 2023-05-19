//---- PO import and json data  ----//
import navPageObj from "./pageObjects/navPageObj";
import fixtureFile from '../fixtures/user.json'

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
    let videoName = 'About us'
    cy.wait(1000);
    NavPageObj.aboutUsVideoName()
    .should('contain', videoName);
})

Cypress.Commands.add("validateVideo", () =>{
    cy.wait(1000);
    NavPageObj.aboutUsVideo()
    .should('have.prop', 'paused', true)
    .and('have.prop', 'ended', false)
    .then(($video) =>{
        $video[0].play()
    })
})

//---- JS web alert validation----//

Cypress.Commands.add('validateAlert', (message)=> {
    cy.on('window:alert', (str)=>{
        expect(str).to.equal(message)
    })
})

//---- Contact form validations  ----//

Cypress.Commands.add("contactValidation", (input,userInformation) =>{
    cy.wait(500)
    input(input).should("exist").click().type(userInformation).should('have.value', userInformation)
})

Cypress.Commands.add("contactWholeValidation", () =>{
    
    let inputEmail = NavPageObj.contactEmail;
    let inputName = NavPageObj.contactName;
    let inputMessage = NavPageObj.contactMessage;
  
    let userEmail = fixtureFile.email;
    let userName = fixtureFile.name;
    let userMessage = fixtureFile.message;

    cy.accessContact();
    cy.contactValidation(inputEmail,userEmail);
    cy.contactValidation(inputName,userName);
    cy.contactValidation(inputMessage,userMessage);
    cy.sendMessageValidation();
})

Cypress.Commands.add("sendMessageValidation", () =>{
    let webMessage = 'Thanks for the message!!'
    NavPageObj.buttonSendMessage().should("exist").click();
    cy.validateAlert(webMessage);
})

//---- Cart validations----//

Cypress.Commands.add("accessCart", () =>{
    NavPageObj.cart().click();
    cy.wait(1000);
})
 
Cypress.Commands.add("cartFunctionalityValidation", ()=>{
    let cartMessage = "Product added"
    cy.wait(500);
    NavPageObj.catalogFirstItem().click();
    cy.wait(1000);
    NavPageObj.addToCartButton().click();
    cy.validateAlert(cartMessage);
})

//---- Sign up validations ----//

Cypress.Commands.add('createRandomUser', ()=>{

    let signInSuccessMessage = 'Sign up successful.'
    let randomNumber = (Math.random() * Math.random() + Math.random());

    NavPageObj.signUpNavButton().click()
    cy.wait(1000);
    // Make below code more efficient
    NavPageObj.signUpUsername().click().type(randomNumber);
    NavPageObj.signUpPassword().click().type(randomNumber);
    NavPageObj.signUpButton().click();
    cy.validateAlert(signInSuccessMessage);
})


/*
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
*/