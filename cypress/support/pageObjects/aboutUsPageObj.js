class aboutUsPageObj {

    videoName(){
        return cy.get('#videoModalLabel')
    }

    video(){
        return cy.get('#example-video_html5_api')
    }
}

export default aboutUsPageObj