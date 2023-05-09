describe('create wisdom',()=>
{
    it('Create wisdom',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        cy.loginapp('administrator','Admin@1234')
       
       cy.get('.icon-dashboard').trigger('mouseover')
       cy.get('.icon-settings').click()
       cy.get('#li93').click()
       cy.get('#li296').click()
       cy.get('#add-emp-plus').click()
       cy.get('#ddlCompany').select('SHRMPRO')
       cy.get('#ddlBranch').select('123-Bangalore')
       cy.get('#ddlDepartment').select('Testing')
       cy.get('#ddlDesignation').select('Developer')
       cy.get('#txtname').type('Geetha1')
       cy.get('#txtdesc').type('Everything')

       cy.get('#ddlstatus').select('Active')
       

       cy.get('#ImagePath').attachFile('Nature image.jpg')
       cy.get('#btnSave').click()
    })
       it('View of wisdom',()=>
       {
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx')
        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Admin@1234')
        cy.get('#btnSubmit').click()
        
        
       
       
       cy.get('#wisdomModal').scrollIntoView({duration:200})
       })


    
       
    
})