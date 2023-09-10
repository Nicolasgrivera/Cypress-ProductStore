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
}

export default cartPageObj;