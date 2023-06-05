describe('Screening Questionaries',()=>{

    it('Create Screening Questionaries',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
       cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
       cy.get('.icon-dashboard').trigger('mouseover').click()
       cy.get('#li82').click()
       cy.get('#li190').click()
       cy.get('#li2682').click()
       cy.get('#add-emp-plus').click()
       cy.get('#ddlQBSkills').select('Cypress')
       cy.get('#txtQuestion').type('What is the merits of cypress automation tool over selenium')
       cy.get('#ddlQBDiffLevel').select('3')
       cy.get('#ddlType').select('Multi Select')
       cy.get('#txt_option1').type('Cypress Automation Is Simple to Set Up')
     
       cy.get('#txt_option2').type('Cypress Has Debugging Capabilities')
       cy.get('#txt_option3').type('Cypress Has an Active Community')
       cy.get('#chkoption1').check({force: true})
       cy.get('#btnsubmit').click()
    })

    it('Edit Screening Questionaries',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li2682').click()
        cy.get('tbody tr:nth-child(1) td:nth-child(1) div:nth-child(1) i:nth-child(1)').click()
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown > #ulList > :nth-child(1) > #btnEdit').click()
        cy.get('#txt_option4').type('Cypress is easy to execute')
        cy.get('#btnsubmit').click()
})

it.only('Delete Screening Questionaries',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
    cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li2682').click()
    cy.get('tbody tr:nth-child(1) td:nth-child(1) div:nth-child(1) i:nth-child(1)').click()
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown > #ulList > :nth-child(2) > #btnDelete').click()
    cy.get('#delete_Confirm > .confirm-button > .btn-default').click()
})
})