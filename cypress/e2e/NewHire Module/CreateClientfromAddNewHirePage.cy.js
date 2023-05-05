describe('NewHire list',()=>{

    it('CreateClientFromAddNewHire',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li81').click()
        cy.get('#li1560').click()
        cy.get('#li1567').click()
        cy.get('.add-emp-plus > .fa').click()
        cy.get('#btnAddClient > .fa').click()
        cy.get('.add-emp-plus').click()
        cy.get('#txt_Name').type('TCS')
        cy.get('#txtLocationClient').type('Delhi')
        cy.get('#txtClientEmployeeName').type('Suresh')
        cy.get('#btnSave').click()
    })

})