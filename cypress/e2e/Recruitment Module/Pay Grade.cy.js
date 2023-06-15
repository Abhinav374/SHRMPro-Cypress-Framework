describe('Recruitment setting',()=>{

    it('CreatePayGrade',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li194').click()
        cy.get('.add-emp-plus').click()
        cy.get('#ddlbranch').select('Bangalore')
        cy.get('#txtCtcSlabCode').type('PG11')
        cy.get('#ddlCurrencyId').select('INR (Indian Rupees)')
        cy.get('#txtCtcSlabFrom').type('500000')
        cy.get('#txtCtcSlabTo').type('800000')
        cy.get('#btnSave').click()

    })
    it('Edit PayGrade',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li194').click()
        cy.get('[onclick="Edit(8)"]').click({force: true})
        cy.get(':nth-child(8) > :nth-child(1) > .table-more-drop > .dropdown-menu > :nth-child(1) > #btnEditPaygrade').click({force: true})
        cy.get('#txtCtcSlabCode').type('PG01')
        cy.get('#btnSave').click()

})
it('Delete PayGrade',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
  
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li194').click()
    cy.xpath('//tbody/tr[7]/td[1]/div[1]/i[1]').click()
    cy.xpath("//div[@class='table-more-drop open dropup']//a[@id='btnDelete']").click()
    cy.get("input[onclick='confirmationclose()']").click()
})

})