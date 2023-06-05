describe('Resume Template',()=>{

    it('Create Resume Template',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li2671').click()
        cy.get('#add-emp-plus').click()
        cy.get('#txtTemplateName').type('Automation resume template')
        cy.get('#ddlFontSize').select('12')
        cy.get('#ddlWaterMarkSize').select('14')
        cy.get('#ddlFirstName').select('First Name')
        cy.get('#ddlLastName').select('Last Name')
        cy.get('#ddlFileFormat').select('Doc')
        cy.get('.slide-popup > .add-body-buttons > .btn-success').click()
        cy.get('#Headerli > a').click()
        cy.get('#ddlHc1').select('CandidateName')
        cy.get('#ddlHc2').select('CandidateCurrentJob')
        cy.get('#ddlHc3').select('CandidateCurrentEmployer')
        cy.get('#ddlHc4').select('RecuriterName')
        cy.get('#ddlHc5').select('RecuriterEmail')
        cy.get('#ddlHc6').select('RecuriterPhone')
        cy.get('.slide-popup > .add-body-buttons > .btn-success').click()
        cy.get('#Bodyli > a').click()
        cy.get('#ddlBodyCoverLetter_1').select('Job Title')
        cy.get('#ddlBodyBasicInfo_1').select('FullName')
        cy.get('#ddlBodyProfessional_1').select('Location')
        cy.get('.slide-popup > .add-body-buttons > .btn-success').click()
        cy.get('#Footerli > a').click()
        cy.get('#ddlFc1').select('RecuriterName')
        cy.get('#ddlFc2').select('OrgnizationName')
        cy.get('#ddlFc3').select('OrgnizationEmail')
        cy.get('.slide-popup > .add-body-buttons > .btn-success').click()
    })

    it('Edit Resume Template',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li2671').click()
        cy.get(':nth-child(3) > :nth-child(1) > .dropdown > .fa').click()
        cy.get(':nth-child(3) > :nth-child(1) > .dropdown > #ulList > :nth-child(1) > #btnEdit').click()
        cy.get('.slide-popup > .add-body-buttons > .btn-success').click()


})
it.only('Delete Resume Template',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
  
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li2671').click()
    cy.get(':nth-child(3) > :nth-child(1) > .dropdown > .fa').click()
    cy.get(':nth-child(3) > :nth-child(1) > .dropdown > #ulList > :nth-child(2) > #btnDelete').click()
    cy.get('#div_Confirmation > .confirm-button > .btn-default').click()  

})

})