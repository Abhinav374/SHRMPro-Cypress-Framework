
describe('NewHire list',()=>{

    it('Edit PreOnboarding record',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li81').click()
        cy.get('#li1560').click()
        cy.get('#li1568').click() 
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown > .fa').click()
        cy.get("div[class='dropdown table-more-drop open'] li[class='btnEditList']").click()
        cy.get('#ddlDocumentType').select('Static')
        cy.get('#btnsave').click().should('be.visible','Record updated successfully !!!')
        
    })
})