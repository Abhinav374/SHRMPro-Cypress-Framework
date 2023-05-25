describe('Skill List',()=>{

    it('Create Skill List',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li191').click({force: true})
        cy.get('.add-emp-plus').click()
        cy.get('#txtSkill').type('Cypress')
        cy.get('#btnSave').click()
    })

       it('Edit Skill List',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li191').click({force: true})
        cy.xpath('//tbody/tr[2]/td[1]/div[1]/i[1]').click()
        cy.xpath("//div[@class='dropdown table-more-drop open']//a[@id='btnEdit']").click()
        cy.get('#ddlStatus').select('In-Active')
        cy.get('#btnSave').click()


    })
  
    it('Delete Skill List',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li191').click({force: true})
        cy.xpath('//tbody/tr[2]/td[1]/div[1]/i[1]').click()
        cy.xpath("//div[@class='dropdown table-more-drop open']//a[@id='btnDelete']").click()
        cy.xpath("//input[@onclick='Cancel()']").click()
})
it.only('Reset Skill List',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
  
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li191').click({force: true})
    cy.get('.add-emp-plus').click()
    cy.get('#txtSkill').type('Cypress')
    cy.get('#btnReset').click()
})
})