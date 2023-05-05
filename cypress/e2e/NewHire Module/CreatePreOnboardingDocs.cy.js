
describe('NewHire list',()=>{

    it('Create record',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li81').click()
        cy.get('#li1560').click()
        cy.get('#li1568').click()   
        cy.get('.fa.fa-plus').click()   
        cy.get('#txtDocumentName').type('New Docs')
        cy.get('#DocumentFilePath').attachFile('cypress.pdf')
        cy.get('#btnsave').click()
            
            
            
            
            
            
            
            
            
            
         
        })
        })
    