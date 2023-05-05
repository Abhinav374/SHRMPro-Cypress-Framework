// ESS>To do


describe('ToDo list',()=>{

    it('Create record',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx ')
        
        cy.loginapp('administrator','Sphinx@789$')
        
        cy.get('.icon-dashboard').trigger('mouseover').click()

       cy.get('a[id="li223"] span[class="arrow"]').click({force: true} )

       cy.get('#li214').click()
        
        cy.get('#add-emp-plus').click()
        
        cy.get('#txttitle').type('Cypress Automation')
  
        cy.get('#ddlCompany').select('Sphinx World Biz Ltd')

        cy.get('#ddlBranch').select('123-Noida sector 16')

        cy.get('#ddl_Employee').select('David  M (238923)')

        cy.get('#txtStartDate').click()

        cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()

        cy.get('#txtStartTime').type('09:00')

        cy.get('#txtduedate').type('04/30/2023',{force: true} )
        cy.get('#txtDueTime').type('18:00')  
        cy.get('#ddlPriority').select('Normal')
        cy.get('#ddlstatus').select('Open')
        cy.get('#txtDescription').type('Cypress Automation')
        cy.get('#txtRemarks').type('Bye bye')
        cy.get('#btnSave').click()


    })

























    










})