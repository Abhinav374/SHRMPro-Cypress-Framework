describe('NewHire list',()=>{

    it('Extend Date of Joining',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li81').click()
        cy.get('#li1560').click()
        cy.get('#li1567').click()
        cy.get('.fa.fa-filter').click()
        cy.get('#txtSPersonalEmail').type('rakesh.s@yopmail.com')
        cy.get("input[value='Search']").click()
        cy.get('.dropdown > .fa').click()
        cy.xpath("//div[@class='dropdown table-more-drop open']//a[@id='btnExtendDOJ']").click()
        // cy.get('#txtExpectedDateOfJoining').type('05-04-2023',{force: true})
      
        cy.get('.ui-datepicker-month').type('05-04-2023')
    })

})
