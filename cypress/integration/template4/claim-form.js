import Claim_Form_PO from '../../support/pageObjects/Claim_Form_PO'

/// <reference types="Cypress" />

describe("Tests the claim form via template4", () => {
    const claim_Form_PO = new Claim_Form_PO();

    beforeEach(function() {
        claim_Form_PO.visitClaimFormPage();
    });

    it("Should be able to submit a valid submission", () => {
     claim_Form_PO.personalDataSubmission("Lucas", "lucasalbcarnaval@gmail.com", "lucas carnaval");
     cy.get('label > span').click();
     claim_Form_PO.dataAndPlaceSubmission('2021-12-31', 0)
     cy.get(':nth-child(12) > .cms-component-411edc1a-button').click();
     claim_Form_PO.validateSuccessMessage()
    });

    it("Shoul not be able to do a sumbission without providing all information", () => {
        claim_Form_PO.personalDataSubmission("Lucas", "lucasalbcarnaval@gmail.com", "lucas carnaval");
        cy.get(':nth-child(12) > .cms-component-411edc1a-button').click();
        claim_Form_PO.validateUnsuccessMessage()
    })
})