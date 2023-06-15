describe('Recruiters Activity',()=>{

    it('Create Recruiters Activity',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li2688').click()
        cy.get('.add-emp-plus > .fa').click()
        cy.get('#txtRecruiterActivityName').type('Automation Testing')
        cy.get('.add-body-buttons > #btn_Save').click()
        
    })
    it('Edit Recruiters Activity',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li2688').click()
        cy.get(':nth-child(6) > :nth-child(1) > .dropdown > .fa').click()
        cy.xpath("//div[@class='dropdown table-more-drop open']//a[@id='btnEdit']").click()
        cy.get('.add-body-buttons > #btn_Save').click()
})
it('Delete Recruiters Activity',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
  
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li2688').click()
    cy.get(':nth-child(6) > :nth-child(1) > .dropdown > .fa').click()
   cy.xpath("//div[@class='dropdown table-more-drop open']//a[@id='btnDelete']").click()
   cy.get('#div_Confirmation > .confirm-button > .btn-default').click()
})
})