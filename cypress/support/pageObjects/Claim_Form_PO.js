class Claim_Form_PO {
    visitClaimFormPage() {
        cy.visit("https://cms.template4.jndla.net/claim-form")
    }

    personalDataSubmission(name, email, signature) {
        cy.get('#c__Name_ee85a0da').type(name)
        cy.get('#c__Email_ee85a0da').type(email)
        cy.get('#c__SignatureText_ee85a0da').type(signature)
        }

    dataAndPlaceSubmission(date, indexState){
        cy.get(':nth-child(5) > :nth-child(1) > div > .cms-component-411edc1a-button').click();
        cy.xpath('//*[@type="date"]').click().type(date);
        cy.get('.null-value').click();
        cy.get('.menu-items').find('ul').find('li').eq(indexState).click();     
    }

    validateSuccessMessage(){
        cy.get('#c__formAppee85a0da').should('contain', 'Your claim has been submitted')
    }

    validateUnsuccessMessage(){
        cy.get('#c__AttestationCheckbox_ee85a0da_error').should('contain', 'required')
    }

}
export default Claim_Form_PO;