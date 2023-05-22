class loginPageObj {

    username() {
        return cy.get('#loginusername')
    }

    password() {
        return cy.get('#loginpassword')
    }

    button() {
        return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

}

export default loginPageObj