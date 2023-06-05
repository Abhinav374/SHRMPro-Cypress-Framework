describe('Recruitment setting',()=>{

    it('Create Salary Configuration',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li2691').click()
        cy.get('.add-emp-plus').click()
        cy.get('#txtComponentName').type('HRA1')
        cy.get('#txtCode').type('O111')
        cy.get('#ddlComponentType').select('Fixed')
        cy.get('#ddlPayType').select('Earning')
        cy.get('#ddlTaxable').select('Taxable')
        cy.get('#txtpfregistrationdate').type('05/01/2023')
        cy.get("div[class='slimScrollDiv'] div:nth-child(2) div:nth-child(1) label:nth-child(1)").click()
        cy.get('#btnSave').click()

    })

    it('Edit Salary Configuration',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li2691').click()
        cy.get('[data-dt-idx="3"]').click()
        cy.get('.dropdown > .fa').click()
        cy.get('#btnEdit').click()
        cy.get('#btnSave').click()   
})

it('Delete Salary Configuration',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
  
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li2691').click()
    cy.get('[data-dt-idx="3"]').click()
    cy.get('.dropdown > .fa').click()
    cy.get('#btnDelete').click()
    cy.get('.comfirmation-alert-box > .confirm-button > .btn-default').click()

})
it('Create Salary structure',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
  
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li2691').click()
    cy.get('#MenuContainer > ul > :nth-child(2) > a').click()
    cy.get('#add-emp-plus').click()
    cy.get('#ddlbranch').select('Noida sector 16')
    cy.get('#txtstrName').type('new')
    cy.get('#txtstrcode').type('st01')
    cy.get('#btnempadd').click()
})
it('Edit Salary structure',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
  
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li2691').click()
    cy.get('#MenuContainer > ul > :nth-child(2) > a').click()
    cy.get(':nth-child(5) > .sorting_1 > .dropdown > .fa').click()
    cy.get(':nth-child(5) > .sorting_1 > .table-more-drop > .dropdown-menu > #delete-list > #btnDelete').click()
    cy.get('.comfirmation-alert-box > .confirm-button > .btn-default').click()

})


it('Add configured structure',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
  
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li2691').click()
    cy.get('#MenuContainer > ul > :nth-child(3) > a').click()
    cy.get('#add-emp-plus').click()
    cy.get('#ddlbranch').select('Noida sector 16')
    cy.get('#ddlstrName').select('(st01) new')
    cy.get('#ddlComponentName').select('HRA1')
    cy.get('#ddlCalculationType').select('Flat')
    cy.get('#txaformula').type('5000')
    cy.get('#btnempadd').click()

})

it('Edit configured structure',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
  
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li2691').click()
    cy.get('#MenuContainer > ul > :nth-child(3) > a').click()
    cy.xpath('//tbody/tr[9]/td[1]/div[1]/i[1]').click()
    cy.get('body > div:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click({force: true})
    cy.get('#btnempadd').click()
})
it.only('Delete configured structure',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
  
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li2691').click()
    cy.get('#MenuContainer > ul > :nth-child(3) > a').click()
    cy.xpath('//tbody/tr[9]/td[1]/div[1]/i[1]').click()
    cy.get('body > div:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)').click({force: true})
    cy.get('.comfirmation-alert-box > .confirm-button > .btn-default').click()




})



})