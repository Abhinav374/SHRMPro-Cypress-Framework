describe('Employee request',()=>{

    it('Request Reason',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li137').click()
        cy.get('#li143').click()
        cy.xpath("//li[@id='div_edit']//i[@class='fa fa-pencil']").click()
        cy.get('#ddlLeadItem_').select('Company Name')
        cy.get('#ddlLeadSeparatedBy_').select('/')

        



    })


})