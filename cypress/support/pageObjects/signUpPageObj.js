class signUpPageObj {

    title() {
        return cy.get('#signInModalLabel')
    }
    username() {
        return cy.get('#sign-username')
    }

    password() {
        return cy.get('#sign-password')
    }

    button () {
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

    close () {
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    }
}

export default signUpPageObj