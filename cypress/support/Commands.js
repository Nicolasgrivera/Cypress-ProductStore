//---- PO import and json data  ----//
import contactPageObj from "./pageObjects/contactPageObj";
import aboutUsPageObj from "./pageObjects/aboutUsPageObj";
import navPageObj from "./pageObjects/navPageObj";
import loginPageObj from "./pageObjects/loginPageObj";
import signUpPageObj from "./pageObjects/signUpPageObj";
import catalogPageObj from "./pageObjects/catalogPageObj";
import fixtureFile from '../fixtures/user.json';
import carouselPageObj from "./pageObjects/carouselPageObj";
import cartPageObj from "./pageObjects/cartPageObj";
import fixtureProducts from "../fixtures/products.json";

let NavPageObj;
let SignUpPageObj
let LoginPageObj;
let AboutUsPageObj;
let ContactPageObj;
let CatalogPageObj;
let CarouselPageObj;
let CartPageObj;

beforeEach(()=> {
    cy.fixture('user.json').as("fixtureFile")
    cy.fixture('products.json').as("fixtureProducts")

    cy.visit("/");
    
    NavPageObj = new navPageObj;
    SignUpPageObj = new signUpPageObj;
    LoginPageObj = new loginPageObj;
    AboutUsPageObj = new aboutUsPageObj;
    ContactPageObj = new contactPageObj;
    CatalogPageObj = new catalogPageObj;
    CarouselPageObj = new carouselPageObj;
    CartPageObj = new cartPageObj;
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

    let login = 'Log in';
    let logout = 'Log out';

    NavPageObj.logInButton()
    .should("exist")
    .and('have.text', login)

    cy.loginUser()
    cy.wait(3000)

    NavPageObj.logOut()
    .should("exist")
    .and('have.text', logout)
})

Cypress.Commands.add("welcomeLoginMessageValidation",() => {

    let userName = fixtureFile.name;
    let message = 'Welcome ' + userName;
    
    NavPageObj.welcome()
    .should("exist")
    .and('have.text', message)

})

//---- LogOut validation ----//

Cypress.Commands.add("logoutChangesToLogin", () => {

    let login = 'Log in';

    NavPageObj.logOut().click();

    cy.wait(1000);

    NavPageObj.logInButton()
    .should("exist")
    .and('have.text', login)

})

//---- Sign up validations ----//

Cypress.Commands.add('signUpTitle', () => {
    NavPageObj.signUpButton().click();
        let title = "Sign up";
        SignUpPageObj.title()
        .should("exist")
        .and('have.text', title)
})

Cypress.Commands.add('createRandomUser', ()=>{

    let signInSuccessMessage = 'Sign up successful.'
    let randomNumber = (Math.random() * Math.random() + Math.random());

    NavPageObj.signUpButton().click();
    cy.wait(1000);

    SignUpPageObj.username()
    .click().type(randomNumber);

    SignUpPageObj.password()
    .click().type(randomNumber);

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
        CarouselPageObj.nextButton().click()
        if(n >= 2){
            for (let i = 0; i <= 2;i ++){
                cy.wait(1000);
                CarouselPageObj.previousButton().click()
            }
            
        }

}})

//---- Go back and forward with the carousel and Image validation ----//

Cypress.Commands.add('carouselValidation', function imageAndCarousel() {
    let imagesSrc = [('Samsung1.jpg'), ('nexus1.jpg'), ('iphone1.jpg')]

    for(let n = 0; n <= imagesSrc.length-1; n ++){
        cy.wait(100)
        CarouselPageObj.actualImage()
        .should('have.attr', 'src', imagesSrc[n])

        CarouselPageObj.nextButton().click();
        
        if(n >= 2){
            for (let i = 0; i <= imagesSrc.length-1; i++){
                imagesSrc = [('Samsung1.jpg'), ('iphone1.jpg'), ('nexus1.jpg')]

                cy.wait(100)
                CarouselPageObj.actualImage()
                .should('have.attr', 'src', imagesSrc[i])

                CarouselPageObj.previousButton().click()
        }}

}})

//---- Cart validations----//

Cypress.Commands.add("accessCart", () =>{
    NavPageObj.cart().click();
    cy.wait(1000);
})
 
Cypress.Commands.add("addCartMessageValidation", ()=>{
    let cartMessage = "Product added"
    cy.wait(500);
    CatalogPageObj.firstItem().click();
    cy.wait(1000);
    CatalogPageObj.addToCartButton().click();
    cy.validateAlert(cartMessage);
})

/* Beneath command takes a random product from the first page, adds it to the cart
   validates its title and price*/

Cypress.Commands.add("addRandomItemToCart", () =>{
    let num = Math.random();
    cy.wait(1000);

    let itemName;
    let itemPrice;

    if(num <= 0.1){
        itemName = fixtureProducts.firstItem[0].productName;
        itemPrice = fixtureProducts.firstItem[0].productPrice;
        CatalogPageObj.firstItem().click();

    }else if(num > 0.1 && num <= 0.2){
        itemName = fixtureProducts.secondItem[0].productName;
        itemPrice = fixtureProducts.secondItem[0].productPrice;
        CatalogPageObj.secondItem().click();

    }else if(num > 0.2 && num <= 0.3){
        itemName = fixtureProducts.thirdItem[0].productName;
        itemPrice = fixtureProducts.thirdItem[0].productPrice;
        CatalogPageObj.thirdItem().click();

    }else if(num > 0.3 && num <= 0.4){
        itemName = fixtureProducts.fourthItem[0].productName;
        itemPrice = fixtureProducts.fourthItem[0].productPrice;
        CatalogPageObj.forthItem().click();

    }else if (num > 0.4 && num <= 0.5){
        itemName = fixtureProducts.fifthItem[0].productName;
        itemPrice = fixtureProducts.fifthItem[0].productPrice;
        CatalogPageObj.fifthItem().click();

    }else if (num > 0.5 && num <= 0.6){
        itemName = fixtureProducts.sixthItem[0].productName;
        itemPrice = fixtureProducts.sixthItem[0].productPrice;
        CatalogPageObj.sixthItem().click();
        
    }else if (num > 0.6 && num <= 0.7){
        itemName = fixtureProducts.seventhItem[0].productName;
        itemPrice = fixtureProducts.seventhItem[0].productPrice;
        CatalogPageObj.seventhItem().click();
        
    }else if (num > 0.7 && num <= 0.8){
        itemName = fixtureProducts.eighthItem[0].productName;
        itemPrice = fixtureProducts.eighthItem[0].productPrice;
        CatalogPageObj.eightItem().click();

    }else if (num > 0.8 && num <= 1){
        itemName = fixtureProducts.ninethItem[0].productName;
        itemPrice = fixtureProducts.ninethItem[0].productPrice;
        CatalogPageObj.ninethItem().click();
    }

    cy.wait(1500);
    cy.addToCartAndGoToCartPage()
    cy.wait(1500);

    CartPageObj.titleContainer()
    .should('have.text',itemName);

    CartPageObj.priceContainer()
    .should('have.text',itemPrice);

}) 

Cypress.Commands.add("addToCartAndGoToCartPage", ()=>{
    CartPageObj.addToCartButton().click();
    cy.wait(1000);
    NavPageObj.cart().click();
})

Cypress.Commands.add("placeAnOrder", ()=>{
    let inputName = CartPageObj.customerName;
    let inputCountry = CartPageObj.customerCountry;
    let inputCity = CartPageObj.customerCity;
    let inputCreditCard = CartPageObj.customerCreditCard;
    let inputMonth = CartPageObj.customerMonth;
    let inputYear = CartPageObj.customerYear;
  
    let customerName = fixtureFile.name;
    let customerCountry = fixtureFile.country;
    let customerCity = fixtureFile.city;
    let customerCreditCard = fixtureFile.creditCard;
    let customerMonth = fixtureFile.month;
    let customerYear = fixtureFile.year;

    let purchaseMessage = "Thank you for your purchase!";

    CatalogPageObj.firstItem().click();
    cy.wait(1000)

    cy.addToCartAndGoToCartPage();
    cy.wait(1000)

    CartPageObj.placeOrderButton().click();
    cy.wait(500);

    cy.formValidation(inputName,customerName);
    cy.formValidation(inputCountry,customerCountry);
    cy.formValidation(inputCity,customerCity);
    cy.formValidation(inputCreditCard,customerCreditCard);
    cy.formValidation(inputMonth,customerMonth);
    cy.formValidation(inputYear,customerYear);

    CartPageObj.purchaseButton().click();
    
    CartPageObj.purchaseMessage()
    .should('contain', purchaseMessage);

    CartPageObj.confirmButton().click();

})


//---- Catalog validations----//




