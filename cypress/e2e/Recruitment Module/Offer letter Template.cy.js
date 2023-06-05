describe('Offer Letter Template',()=>{

    it('Create Offer Letter Template',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li2684').click()
        cy.wait(4000)
        cy.get('#add-emp-plus').click()
        cy.get('#txtOfferLetterTemplateName1').type('Automation testing template')
        cy.get('#ddlFontSizeOfferLetter').select('12')
        cy.get('#ddlCompanyWaterMark').select('Sphinx World Biz Ltd')
        cy.get('#ddlWaterMarkSizeOfferLetter').select('14')
        cy.get('#ddlFileFormatOfferLetter').select('pdf')
        cy.get('#btnSaveOfferLetter').click()
        cy.get('#ddlHc1').select('Company Name')
        cy.get('#ddlHc2').select('Company Address')
        cy.get('#btnSaveOfferLetter').click()
        cy.get('#Bodyli > a').click()
        cy.get('#ddlBodyItem_1').select('Company Name')
        cy.get('#ddlBodyFormat_1').select('First Name')
        cy.get('#txtBodySubject').type('New')
        cy.get('#btnSaveOfferLetter').click()
        cy.get('#Signatureli > a').click()
        cy.get('#fileDigitalSignature').attachFile('S.PNG')
        cy.get('.chosen-choices').type('{enter}')
        cy.get('#btnSaveOfferLetter').click()

    })
    it('Edit Offer Letter Template',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li2684').click()
        cy.get('.even > :nth-child(1) > .dropdown > .fa').click()
        cy.get('.even > :nth-child(1) > .dropdown > #ulList > :nth-child(1) > #btnEdit').click()
        cy.get('#btnSaveOfferLetter').click()
})
it.only('delete Offer Letter Template',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
  
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li2684').click()
    cy.get('.even > :nth-child(1) > .dropdown > .fa').click()
    cy.get('.even > :nth-child(1) > .dropdown > #ulList > :nth-child(2) > #btnDelete').click()
    cy.get('#div_Confirmation > .confirm-button > .btn-default').click()


})

})