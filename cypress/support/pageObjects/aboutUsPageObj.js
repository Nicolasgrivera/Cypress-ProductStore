class aboutUsPageObj {

    aboutUsVideoName(){
        return cy.get('#videoModalLabel')
    }

    aboutUsVideo(){
        return cy.get('#example-video_html5_api')
    }
}

export default aboutUsPageObj