class signUpPageObj {
    signUpUsername() {
        return cy.get('#sign-username')
    }

    signUpPassword() {
        return cy.get('#sign-password')
    }

    signUpButton () {
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }
}

export default signUpPageObj