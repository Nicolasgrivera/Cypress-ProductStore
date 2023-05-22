//---- PO import and json data  ----//
import contactPageObj from "./pageObjects/contactPageObj";
import aboutUsPageObj from "./pageObjects/aboutUsPageObj";
import navPageObj from "./pageObjects/navPageObj";
import loginPageObj from "./pageObjects/loginPageObj";
import signUpPageObj from "./pageObjects/signUpPageObj";
import fixtureFile from '../fixtures/user.json'

let testData;
let NavPageObj;
let SignUpPageObj
let LoginPageObj;
let AboutUsPageObj
let ContactPageObj

beforeEach(()=> {
    cy.fixture('user.json').then(function(dataJson) {
      testData = dataJson;
    })
    cy.visit("/");
    NavPageObj = new navPageObj;
    SignUpPageObj = new signUpPageObj;
    LoginPageObj = new loginPageObj;
    AboutUsPageObj = new aboutUsPageObj;
    ContactPageObj = new contactPageObj;
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
    AboutUsPageObj.aboutUsVideoName()
    .should('contain', videoName);
})

Cypress.Commands.add("validateVideo", () =>{
    cy.wait(1000);
    AboutUsPageObj.aboutUsVideo()
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
    
    let inputEmail = ContactPageObj.contactEmail;
    let inputName = ContactPageObj.contactName;
    let inputMessage = ContactPageObj.contactMessage;
  
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
    ContactPageObj.buttonSendMessage().should("exist").click();
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
    SignUpPageObj.signUpUsername().click().type(randomNumber);
    SignUpPageObj.signUpPassword().click().type(randomNumber);
    SignUpPageObj.signUpButton().click();
    cy.validateAlert(signInSuccessMessage);
})

//---- Go back and forward with the carousel ----//

Cypress.Commands.add('multiclickForCarousel', function carouselNextAndPreviousButton() {

    for(let n = 0; n <= 2; n ++){
        cy.wait(1000)
        NavPageObj.carouselNextButton().then(($cnb)=> {
            const clickNextButton = $cnb.click();
        })
        if(n >= 2){
            for (let i = 0; i <= 2;i ++){
                cy.wait(1000)
                NavPageObj.carouselPreviousButton().then(($cpb)=> {
                    const clickPreviousButton = $cpb.click();
                })
            }
            
        }

}})

//---- Go back and forward with the carousel and Image validation ----//

Cypress.Commands.add('carouselValidation', function imageAndCarousel() {

    for(let n = 0; n <= 2; n ++){
    
        let imagesSrc = [('Samsung1.jpg'), ('nexus1.jpg'), ('iphone1.jpg')]
        cy.wait(100)
        NavPageObj.actualImage().should('have.attr', 'src', imagesSrc[n])
        NavPageObj.carouselNextButton().then(($cnb)=> {
            const clickNextButton = $cnb.click();
        });
        //nextButton();
        
        if(n >= 2){
            for (let i = 0; i <= 2; i++){
                let imagesSrc = [('Samsung1.jpg'), ('iphone1.jpg'), ('nexus1.jpg')]
                cy.wait(100)
                NavPageObj.actualImage().should('have.attr', 'src', imagesSrc[i])
                NavPageObj.carouselPreviousButton().then(($cpb)=> {
                    const clickPreviousButton = $cpb.click();
                });
                //previousButton();
        }}

}})

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