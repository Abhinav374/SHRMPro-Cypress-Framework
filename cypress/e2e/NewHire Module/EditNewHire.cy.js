describe('NewHire list',()=>{

    it('Edit New Hire Details',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        // change contact no
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li81').click()
        cy.get('#li1560').click()
        cy.get('#li1567').click()
        cy.get('.fa.fa-filter').click()
        cy.get('#txtSPersonalEmail').type('rakesh.s@yopmail.com')
        cy.get("input[value='Search']").click()
        cy.get('.dropdown > .fa').click()
        cy.get('#btnEdit4 > a').click()
        cy.get('#ddlClient').select('Swl')
        cy.get('#ContactNumber').clear()
        cy.get('#ContactNumber').type('8787357171')
        cy.get('#btnsave').click()



    })

})