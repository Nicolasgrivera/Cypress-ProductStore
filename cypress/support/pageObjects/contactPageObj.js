class contactPageObj {
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

    buttonSendMessage(){
        return cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

    closeContact(){
        return cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    }
}

export default contactPageObj