describe('Employee request',()=>{

    it('Request Reason',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li137').click()
        cy.get('#li1557').click()
        cy.get('.add-emp-plus').click()
        cy.get('#ddlCompany').select('Sphinx World Biz Ltd')
        cy.get('#ddlBranch').select('Noida sector 16')
        cy.get('#ddlDepartment').select('IT-software')
        cy.get('#ddlEmployee').select('khushboo')
        cy.get('#TxtRequestReason').type('Laptop')
        cy.get('#counterTextbox').type('48')
        cy.get('#ddlStatus').select('Active')
        cy.get('.add-body-buttons > #btn_Save').click()



    })


})