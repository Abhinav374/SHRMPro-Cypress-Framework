describe('Deleting announcement',()=>
{
    it('Delete Announcement',()=>
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
       
       
       cy.get(':nth-child(2) > :nth-child(1) > .dropdown > .fa').click()

       cy.wait(5000)
       
       
       cy.get(':nth-child(2) > :nth-child(1) > .dropdown > #ulList > :nth-child(2) > #btnDelete').click()
       //cy.get('#div_Confirmation > .confirm-button > .btn-danger').click()

       cy.wait(4000)
       
       cy.get('#div_Confirmation > .confirm-button > .btn-danger').click()
       
      
    })
})

