class navPageObj {

    home(){
        return cy.get('.active > .nav-link')
    }

    contact(){
        return cy.get(':nth-child(2) > .nav-link')
    }

    aboutUs(){
        return cy.get(':nth-child(3) > .nav-link')
    }

    cart(){
        return cy.get(':nth-child(4) > .nav-link')
    }

    catalogFirstItem() {
        return cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch')
    }

    addToCartButton() {
        return cy.get('.col-sm-12 > .btn')
    }

    signUpNavButton() {
        return cy.get('#signin2')
    }

    logInNavButton() {
        return cy.get('#login2')
    }

    carouselNextButton() {
        return cy.get('.carousel-control-next-icon')
    }

    carouselPreviousButton() {
        return cy.get('.carousel-control-prev-icon')
    }

    actualImage() {
        return cy.get('.active > .d-block')
    }

}

export default navPageObj