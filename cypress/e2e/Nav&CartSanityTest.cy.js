import navPageObj from "../support/pageObjects/navPageObj";
import "../support/Commands"
import "../support/modules/globalVariables.js"
import fixtureFile from '../fixtures/user.json'

let NavPageObj = new navPageObj
let userEmail = fixtureFile.email

describe('Nav and Cart functionality testsuite', () => {
  })

  it('Home', () => {
    cy.accessHome();
  })

  it.only('Contact', () => {
    //let inputEmail = NavPageObj.contactEmail();
    //let inputEmail = NavPageObj.contactEmail().invoke('$inputEmail').as('inputEmail')
    //cy.wrap({ name: inputEmail }).its('name').should('eq', NavPageObj.contactEmail) 
    cy.log(JSON.stringify(fixtureFile.email));
    
        let inputEmail = NavPageObj.contactEmail;
        let inputName = NavPageObj.contactName;
        let inputMessage = NavPageObj.contactMessage;
      
        let userEmail = fixtureFile.email
        let userName = fixtureFile.name;
        let userMessage = fixtureFile.message;
        cy.accessContact()
        //cy.log(inputEmail)
        cy.log(fixtureFile.email)
        cy.contactValidation(inputEmail,userEmail)
        cy.contactValidation(inputName,userName)
        cy.contactValidation(inputMessage,userMessage)
        //cy.validateEmailInput();
        //cy.validateNameInput();
        //cy.validateMessageInput();
    })

  it('AboutUs', () => {
    cy.accessAboutUs();
    cy.validateVideoName();
    cy.validateVideo();
  })

  it('Cart', () => {

  })

//}) 