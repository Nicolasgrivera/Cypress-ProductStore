class signUpPageObj {
    username() {
        return cy.get('#sign-username')
    }

    password() {
        return cy.get('#sign-password')
    }

    button () {
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }
}

export default signUpPageObj