describe('NewHire list',()=>{

    it('Created Record List',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li81').click()
        cy.get('#li1560').click()
        cy.get('#li1567').click()
        cy.get(':nth-child(10) > :nth-child(1) > .table-more-drop > .fa').scrollIntoView({duration:4000})
        cy.wait(4000)
        cy.get('[data-dt-idx="2"]').click()
        cy.wait(4000)
        cy.get('[data-dt-idx="3"]').click()
        cy.wait(4000)
        cy.get('[data-dt-idx="4"]').click()
        cy.wait(4000)
        cy.get('[data-dt-idx="5"]')
       

    })

})