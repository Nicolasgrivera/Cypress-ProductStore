class navPageObj {

    home(){
        return cy.get('.active > .nav-link')
    }

    contact(){
        return cy.get(':nth-child(2) > .nav-link')
    }

    contactEmail(){
        return cy.get('#recipient-email')
    }
    

    contactName(){
        return cy.get('#recipient-name')
    }

    contactMessage(){
        return cy.get('#message-text')
    }

    buttonSendMessage(){
        return cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

    aboutUs(){
        return cy.get(':nth-child(3) > .nav-link')
    }

    aboutUsVideoName(){
        return cy.get('#videoModalLabel')
    }

    aboutUsVideo(){
        return cy.get('#example-video_html5_api')
    }

    cart(){
        return cy.get(':nth-child(4) > .nav-link')
    }

    catalogFirstItem() {
        return cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch')
    }

    addToCartButton() {
        return cy.get('.col-sm-12 > .btn')
    }

    signUpNavButton() {
        return cy.get('#signin2')
    }

    signUpUsername() {
        return cy.get('#sign-username')
    }

    signUpPassword() {
        return cy.get('#sign-password')
    }

    signUpButton () {
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

    logInNavButton() {
        return cy.get('#login2')
    }

    logInUsername() {
        return cy.get('#loginusername')
    }

    logInPassword() {
        return cy.get('#loginpassword')
    }

    logInButton() {
        return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }
}

export default navPageObj