class navPageObj {

    home(){
        return cy.get('.active > .nav-link')
    }

    contact(){
        return cy.get(':nth-child(2) > .nav-link')
    }

    contactEmail(){
        return cy.get('#recipient-email')
    }
    

    contactName(){
        return cy.get('#recipient-name')
    }

    contactMessage(){
        return cy.get('#message-text')
    }

    aboutUs(){
        return cy.get(':nth-child(3) > .nav-link')
    }

    aboutUsVideoName(){
        return cy.get('#videoModalLabel')
    }

    aboutUsVideo(){
        return cy.get('#example-video_html5_api')
    }
}

export default navPageObj