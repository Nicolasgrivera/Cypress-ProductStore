class carouselPageObj {
    nextButton() {
        return cy.get('.carousel-control-next-icon')
    }

    previousButton() {
        return cy.get('.carousel-control-prev-icon')
    }

    actualImage() {
        return cy.get('.active > .d-block')
    }
}

export default carouselPageObj