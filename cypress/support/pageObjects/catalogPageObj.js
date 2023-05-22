class catalogPageObj {
    catalogFirstItem() {
        return cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch')
    }

    addToCartButton() {
        return cy.get('.col-sm-12 > .btn')
    }
}

export default catalogPageObj