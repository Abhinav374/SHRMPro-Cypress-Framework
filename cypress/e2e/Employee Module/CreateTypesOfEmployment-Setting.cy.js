describe('Employee type',()=>{

    it('Typer of employee settings',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li137').click()
        cy.get('#li414').click()
        cy.get('#add-emp-plus').click()
        cy.get('#txtStatusName').type('Adhoc')
        cy.get('.add-body-buttons > #btn_Save').click()



    })


})