describe('Recruitment setting',()=>{

    it('Set Requistion Approver Name',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li195').click()
        cy.get('.chosen-choices').click()
        cy.xpath("//i[@id='btn_Save']").click()
        
    })

      
})