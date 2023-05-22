class loginPageObj {

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

export default loginPageObj