describe('Recruitment setting',()=>{

    it('Create types of employment',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li193').click()
        cy.get('#add-emp-plus').click()
        cy.get('#txtStatusName').type('Contract to hire')
        cy.get('.add-body-buttons > #btn_Save').click()
    })
    it('Edit types of employment',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li193').click()
        cy.get(':nth-child(2) > :nth-child(1) > .dropdown > .fa').click()
        cy.xpath("//div[@class='dropdown table-more-drop open']//a[@id='btnEdit']").click()
        cy.get('#ddlStatus').select('In-Active')
        cy.get('.add-body-buttons > #btn_Save').click()
        
})


it.only('Edit types of employment',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li193').click()
    cy.get(':nth-child(2) > :nth-child(1) > .dropdown > .fa').click()
    cy.xpath("//div[@class='dropdown table-more-drop open']//a[@id='btnDelete']").click()
    cy.get("input[onclick='confirmationclose()']").click()
})

})