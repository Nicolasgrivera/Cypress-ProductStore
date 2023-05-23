class navPageObj {

    home(){
        return cy.get('.active > .nav-link')
    }

    contact(){
        return cy.get(':nth-child(2) > .nav-link')
    }

    aboutUs(){
        return cy.get(':nth-child(3) > .nav-link')
    }

    cart(){
        return cy.get(':nth-child(4) > .nav-link')
    }

    signUpButton() {
        return cy.get('#signin2')
    }

    logInButton() {
        return cy.get('#login2')
    }

}

export default navPageObj