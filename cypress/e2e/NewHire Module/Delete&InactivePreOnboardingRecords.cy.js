
describe('NewHire list',()=>{

    it('DeletePreOnboarding record',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li81').click()
        cy.get('#li1560').click()
        cy.get('#li1568').click() 
        cy.get(':nth-child(3) > :nth-child(1) > .dropdown > .fa').click()
        // cy.get(':nth-child(3) > :nth-child(1) > .dropdown > .dropdown-menu > .btnDeleteList > #btnDelete\[object\ Object\]').click()
        cy.get("div[class='dropdown table-more-drop open'] li[class='btnDeleteList']").click()
        cy.wait(5000)
        cy.get('.comfirmation-alert-box > .confirm-button > .btn-danger').click()
    
    })
        

    })

