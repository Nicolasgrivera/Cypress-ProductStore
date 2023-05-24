//---- PO import and json data  ----//
import contactPageObj from "./pageObjects/contactPageObj";
import aboutUsPageObj from "./pageObjects/aboutUsPageObj";
import navPageObj from "./pageObjects/navPageObj";
import loginPageObj from "./pageObjects/loginPageObj";
import signUpPageObj from "./pageObjects/signUpPageObj";
import catalogPageObj from "./pageObjects/catalogPageObj";
import fixtureFile from '../fixtures/user.json';
import carouselPageObj from "./pageObjects/carouselPageObj";

let testData;
let NavPageObj;
let SignUpPageObj
let LoginPageObj;
let AboutUsPageObj;
let ContactPageObj;
let CatalogPageObj;
let CarouselPageObj;

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
    CatalogPageObj = new catalogPageObj;
    CarouselPageObj = new carouselPageObj;
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
    AboutUsPageObj.videoName()
    .should('contain', videoName);
})

Cypress.Commands.add("validateVideo", () =>{
    cy.wait(1000);
    AboutUsPageObj.video()
    .should('have.prop', 'paused', true)
    .and('have.prop', 'ended', false)
    .then(($video) =>{
        $video[0].play();
    })
})

//---- JS web alert validation----//

Cypress.Commands.add('validateAlert', (message)=> {
    cy.wait(1000)
    cy.on('window:alert', (str)=>{
        expect(str).to.equal(message);
    })
    cy.wait(1000)
    })

Cypress.Commands.add('validateAlertForIncompleteRegistration', ()=> {
    let signUpErrorMessage = 'Please fill out Username and Password.'
    cy.on('window:alert',(t)=>{
        expect(t).to.contains(signUpErrorMessage);
    })
})

//----  form validation  ----//

Cypress.Commands.add("formValidation", (input,userInformation) =>{
    cy.wait(500)
    input(input).should("exist").click().type(userInformation).should('have.value', userInformation);
})

//---- Contact form validations  ----//

Cypress.Commands.add("contactWholeValidation", () =>{
    
    let inputEmail = ContactPageObj.contactEmail;
    let inputName = ContactPageObj.contactName;
    let inputMessage = ContactPageObj.contactMessage;
  
    let userEmail = fixtureFile.email;
    let userName = fixtureFile.name;
    let userMessage = fixtureFile.message;

    cy.accessContact();
    cy.formValidation(inputEmail,userEmail);
    cy.formValidation(inputName,userName);
    cy.formValidation(inputMessage,userMessage);
    cy.sendMessageValidation();
})

Cypress.Commands.add("sendMessageValidation", () =>{
    let webMessage = 'Thanks for the message!!'
    ContactPageObj.buttonSendMessage().should("exist").click();
    cy.validateAlert(webMessage);
})

//---- LogIn validations ----//

Cypress.Commands.add('loginUser', () => {

    let inputName = LoginPageObj.username;
    let inputPassword = LoginPageObj.password;
  
    let userName = fixtureFile.name;
    let userPassword= fixtureFile.password;
    
    NavPageObj.logInButton().click()
    cy.wait(500)
    cy.formValidation(inputName,userName);
    cy.formValidation(inputPassword,userPassword);
    LoginPageObj.button().click()
})

Cypress.Commands.add('loginChangesToLogout',()=>{
    NavPageObj.logInButton().then(($lin)=> {

        let login = 'Log in';

        NavPageObj.logInButton().should("exist").should('have.text', login)
        expect($lin).to.have.text(login);
    })

    cy.loginUser()
    cy.wait(3000)

    NavPageObj.logOut().then(($lout)=>{

        let logout = 'Log out';

        NavPageObj.logOut().should("exist").should('have.text', logout)
        expect($lout).to.have.text(logout);
    })
})

Cypress.Commands.add("welcomeLoginMessageValidation",() => {

    NavPageObj.welcome().then(($wmv)=> {
        let userName = fixtureFile.name;
        let message = 'Welcome ' + userName;
    
        NavPageObj.welcome().should("exist").should('have.text', message)
        expect($wmv).to.have.text(message);
    })

})

//---- Sign up validations ----//

Cypress.Commands.add('signUpTitle', () => {
    NavPageObj.signUpButton().click();
    SignUpPageObj.title().then(($sut)=> {
        let title = "Sign up";
        SignUpPageObj.title().should("exist").should('have.text', title)
        expect($sut).to.have.text(title);
    })
})

Cypress.Commands.add('createRandomUser', ()=>{

    let signInSuccessMessage = 'Sign up successful.'
    let randomNumber = (Math.random() * Math.random() + Math.random());

    NavPageObj.signUpButton().click();
    cy.wait(1000);
    SignUpPageObj.username().click().type(randomNumber);
    SignUpPageObj.password().click().type(randomNumber);
    SignUpPageObj.button().click();
    cy.validateAlert(signInSuccessMessage);
    
})

Cypress.Commands.add('createAlreadyRegisteredUser', () => {

    let signUpErrorMessage = 'This user already exist.'

    let inputName = SignUpPageObj.username;
    let inputPassword = SignUpPageObj.password;
  
    let userName = fixtureFile.name;
    let userPassword= fixtureFile.password;

    NavPageObj.signUpButton().click();
    cy.wait(500);
    cy.formValidation(inputName,userName);
    cy.formValidation(inputPassword,userPassword);
    SignUpPageObj.button().click();
    cy.validateAlert(signUpErrorMessage);
})

Cypress.Commands.add('createUserWithoutPassword', () => {

    let signUpErrorMessage = 'Please fill out Username and Password.'
    
    let inputName = SignUpPageObj.username;
    let userName = fixtureFile.name;

    NavPageObj.signUpButton().click();
    cy.wait(500);
    cy.formValidation(inputName,userName);
    SignUpPageObj.button().click();
    cy.on('window:alert',(t)=>{
        expect(t).to.contains(signUpErrorMessage);
     })

})

Cypress.Commands.add('createUserWithoutUsername', () => {
    
    let signUpErrorMessage = 'Please fill out Username and Password.'
    
    let inputPassword = SignUpPageObj.password;
    let userPassword= fixtureFile.password;

    NavPageObj.signUpButton().click();
    cy.wait(500);
    cy.formValidation(inputPassword,userPassword);
    SignUpPageObj.button().click();
    cy.on('window:alert',(t)=>{
        expect(t).to.contains(signUpErrorMessage);
     })
})

//---- Go back and forward with the carousel ----//

Cypress.Commands.add('multiclickForCarousel', function carouselNextAndPreviousButton() {

    for(let n = 0; n <= 2; n ++){
        cy.wait(1000);
        CarouselPageObj.nextButton().then(($cnb)=> {
            const clickNextButton = $cnb.click();
        })
        if(n >= 2){
            for (let i = 0; i <= 2;i ++){
                cy.wait(1000);
                CarouselPageObj.previousButton().then(($cpb)=> {
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
        CarouselPageObj.actualImage().should('have.attr', 'src', imagesSrc[n])
        CarouselPageObj.nextButton().then(($cnb)=> {
            const clickNextButton = $cnb.click();
        });
        
        if(n >= 2){
            for (let i = 0; i <= 2; i++){
                let imagesSrc = [('Samsung1.jpg'), ('iphone1.jpg'), ('nexus1.jpg')]
                cy.wait(100)
                CarouselPageObj.actualImage().should('have.attr', 'src', imagesSrc[i])
                CarouselPageObj.previousButton().then(($cpb)=> {
                    const clickPreviousButton = $cpb.click();
                });
        }}

}})

//---- Cart validations----//

Cypress.Commands.add("accessCart", () =>{
    NavPageObj.cart().click();
    cy.wait(1000);
})
 
Cypress.Commands.add("cartFunctionalityValidation", ()=>{
    let cartMessage = "Product added"
    cy.wait(500);
    CatalogPageObj.firstItem().click();
    cy.wait(1000);
    CatalogPageObj.addToCartButton().click();
    cy.validateAlert(cartMessage);
})
