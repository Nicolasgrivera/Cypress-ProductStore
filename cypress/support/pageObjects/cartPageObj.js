class cartPageObj {
    addToCartButton() {
        return cy.get('.col-sm-12 > .btn')
    }

    titleContainer() {
        return cy.get('.success > :nth-child(2)')
    }

    priceContainer() {
        return cy.get('.success > :nth-child(3)')
    }

    placeOrderButton() {
        return cy.get('.col-lg-1 > .btn')
    }

    customerName () {
        return cy.get('#name')
    }

    customerCountry() {
        return cy.get('#country')
    }

    customerCity() {
        return cy.get('#city')
    }

    customerCreditCard() {
        return cy.get('#card')
    }

    customerMonth() {
        return cy.get('#month')
    }

    customerYear() {
        return cy.get('#year')
    }

    purchaseButton() {
        return cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

    closeButton() {
        return cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    }

    purchaseMessage() {
        return cy.get('.sweet-alert > h2')
    }

    confirmButton() {
        return cy.get('.confirm');
    }

}

export default cartPageObj;