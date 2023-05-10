//const { describe } = require("mocha");

describe('employyess',()=>
{
    it('employess data',()=>
    {
cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx')
cy.get('#txtUsername').type('administrator')
cy.get('#txtPassword').type('Admin@1234')
cy.get('#btnSubmit').click()
cy.get('.icon-dashboard').trigger('mouseover')
        cy.get('#li81').click()
        cy.get('#li4').click()
        cy.get('#li39').click()
        cy.get('#add-emp-plus').click()
        cy.get('#ddlNameTitle').select('Mrs.')
        cy.get('#FirstName').type('pinky')
        cy.get('#ddlcompany').select('Sphinx World Biz Ltd')
        cy.get('#ddlBranch').select('123-Noida sector 16')
        //cy.get('#ddlBranch').select('CTS1-Kurnool')
        cy.get('#ddldeptName').select('Tester')
        cy.get('#ddlDesignation').select('Senior Tester')
        cy.get('#txtDOB').clear().type('04-09-1995')
        cy.get('#EmailID').type('pinky@gmail.com')
        cy.get('#txtDOJ').clear().type('03-02-2023')
        cy.get('#CellularNumber').type('761459335')
        cy.get('#ddlRoleName').select('Team Lead')
        cy.get('#ddlgender').select('Female')
        cy.get('#ddlMaritalStatus').select('Married')
        cy.get('#ddlUniqueDocumentType').select('Unique Identification Authority of India(UIDAI)')
        cy.get('#txtAdharNo').type('1234514454278927')
        cy.get('#ddlWorkerType').select('New')
        cy.get('#txtReportingManager').type('Mob- (Sphinx12)').type('{enter}')

       // cy.get('#txtReportingManager').type('Nitish Kumar- (Sphinx/Noida/9999)').type('{enter}')
        //cy.get('#EmployeeQuickAdd > .slide-popup-inner > .add-body-buttons > .btn-default').click()
        cy.get('#EmployeeQuickAdd > .slide-popup-inner > .add-body-buttons > .btn-warning').click()
    
       // cy.get('#login-Send-mail').click()
        //cy.get('#EmployeeQuickAdd > .slide-popup-inner > .add-body-buttons > .btn-success').click()



    })
})

