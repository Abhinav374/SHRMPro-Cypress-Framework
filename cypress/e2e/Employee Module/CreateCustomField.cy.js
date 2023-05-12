describe('NewHire list',()=>{

    it('Create Custom Field',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li137').click()
        cy.get('#li516').click()
        cy.get('.add-emp-plus').click()
        cy.get('#txtFieldName').type('Employee Module')
        cy.get('#ddlTypes').select('Text')
        cy.get('#btnsave').click()
        
    })
    it('Create Custom Field',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li137').click()
        cy.get('#li516').click()
        cy.get('.add-emp-plus').click()
        cy.get('#txtFieldName').type('Emp-custom')
        cy.get('#ddlTypes').select('Date')
        cy.get('#btnsave').click()

})
it('Create Custom Field',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li137').click()
    cy.get('#li516').click()
    cy.get('.add-emp-plus').click()
    cy.get('#txtFieldName').type('Emp-Custom-Module')
    cy.get('#ddlTypes').select('DropDown')
    cy.get('#btnsave').click()

})

})