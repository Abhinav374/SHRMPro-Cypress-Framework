describe('Employee request',()=>{

    it('Request Reason',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li137').click()
        cy.get('#li2653').click()
        cy.get('.add-emp-plus').click()
        cy.get('#txtESQuestion').type('How is employee module working')
        cy.get('#btnSaveQns').click()
        

        



    })


})