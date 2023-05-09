describe('Creating announcement',()=>
{
    it('Visit the url',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
       
       
       cy.get('.icon-dashboard').trigger('mouseover')
       cy.get('.icon-settings').click()
       cy.get('#li93').click()
       cy.get('#li26').click()
       cy.get('#add-emp-plus').click()
       cy.get('#ddlCompany').select('Inphesis')
       cy.get('#ddlBranch').select('Gurugram')
       cy.get('#ddlDepartment').select('Tester')
       cy.get('#ddlDesignation').select('Senior Tester')
       cy.get('.jqte_editor').type('Announcement for testing')
       cy.get('.add-body-buttons > #btn_Save').click()
       cy.get('.icon-process').click()
       cy.get('#li35').click()
       cy.get('#li94').click()
      // cy.get(':nth-child(1) > :nth-child(6) > .green').click()
       //cy.get('#div_Confirmation > .confirm-button > .btn-danger').click()
       cy.get(':nth-child(5) > :nth-child(6)').click()
       
       cy.get('#div_Confirmation2 > .confirm-button > .btn-danger').click()
       cy.get('#txtRejDescription').type('No need')
       //cy.get('#popupforRejectionDesciption > .modal-dialog > .modal-content > .modal-footer > #btn_Save').click()
      
    })
})