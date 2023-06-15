describe('Candidate stage',()=>{

    it('Create Candidate stage',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li553').click()
        cy.get('.add-emp-plus').click()
        cy.get('#ddlCandidateStatusId').select('Screening')
        cy.get('#txt_Stage').type('New')
        cy.get('#btnSave').click()  
    })
    it('Edit Candidate stage',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li553').click()
        cy.get('[data-dt-idx="2"]').click()
        cy.get(':nth-child(8) > :nth-child(1) > .dropdown > .fa').click()
        cy.get(':nth-child(8) > :nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > #btnEdit').click()
        cy.get('#txt_Description').type('Shortlisted')
        cy.get('#btnSave').click()

})
it.only('Delete Candidate stage',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
  
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li553').click()
    cy.get('[data-dt-idx="2"]').click()
    cy.get(':nth-child(8) > :nth-child(1) > .dropdown > .fa').click()
    cy.get(':nth-child(8) > :nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2) > #btnDelete').click()
    cy.get('.comfirmation-alert-box > .confirm-button > .btn-default').click()
})

})


