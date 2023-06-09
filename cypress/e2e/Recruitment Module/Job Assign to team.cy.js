describe('Offer Letter Template',()=>{

    it('Create Offer Letter Template',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('rajatpython94@gmail.com','Admin@1234')
        // cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li478').click()
        cy.get('#li1637').click()
        cy.get('#li1662').click()
        cy.get('#MenuContainer > ul > :nth-child(1) > a').click()
        cy.get(':nth-child(1) > :nth-child(4) > .btn-wrapper > .green > .fa').click()
        cy.get('#txtEmployeeName_1').type('Ramesh Kumar').type('{enter}')


    })

})