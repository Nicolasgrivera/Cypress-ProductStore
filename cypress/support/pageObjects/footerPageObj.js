class footerPageObj {
    aboutUsTitle() {
        return cy.get(':nth-child(1) > .thumbnail > .caption > .grrrr > b')
    }

    aboutUSText() {
        return cy.get(':nth-child(1) > .thumbnail > .caption > p')
    }

    getInTouchTitle() {
        return cy.get('.col-sm-3 > .thumbnail > .caption > .grrrr > b')
    }

    address() {
        return cy.get('.col-sm-3 > .thumbnail > .caption > :nth-child(2)')
    }

    phone() {
        return cy.get('.caption > :nth-child(3)')
    }

    email() {
        return cy.get('.caption > :nth-child(4)')
    }

    icon() {
        return cy.get('h4 > img')
    }
}