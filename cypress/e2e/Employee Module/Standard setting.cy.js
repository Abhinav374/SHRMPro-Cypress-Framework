describe('NewHire list',()=>{

    it('Complete onboarding',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li137').click()
        cy.get('#li359').click()
        cy.get('#add-emp-plus').click()
        cy.get('#txtEducationStandard').type('Computer Graduate')
        cy.get('#btnSave').click()



    })


})