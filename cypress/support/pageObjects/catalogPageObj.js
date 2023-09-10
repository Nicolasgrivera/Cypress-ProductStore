class catalogPageObj {
    firstItem() {
        return cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch')
    }

    secondItem() {
        return cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch')
    }

    thirdItem() {
        return cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch')
    }

    forthItem() {
        return cy.get(':nth-child(4) > .card > .card-block > .card-title > .hrefch')
    }

    fifthItem() {
        return cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch')
    }

    sixthItem() {
        return cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch')
    }

    seventhItem() {
        return cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch')
    }

    eightItem() {
        return cy.get(':nth-child(8) > .card > .card-block > .card-title > .hrefch')
    }

    ninethItem() {
        return cy.get(':nth-child(9) > .card > .card-block > .card-title > .hrefch')
    }

    phoneFilter() {
        return cy.get('[onclick="byCat(%27phone%27)"]')
    }

    laptopFilter() {
        return cy.get('[onclick="byCat(%27notebook%27)"]')
    }

    monitorFilter() {
        return cy.get('[onclick="byCat(%27monitor%27)"]')
    }

    nextPage() {
        return cy.get('#next2')
    }

    prevPage() {
        return cy.get('#prev2')
    }
}

export default catalogPageObj