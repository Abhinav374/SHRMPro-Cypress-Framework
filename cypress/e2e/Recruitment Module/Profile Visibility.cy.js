describe('Profile Visibility',()=>{

    it('Create Profile Visibility',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
       cy.get('#li2672').click({force: true})
       cy.get('#add-emp-plus').click()
       cy.get('.chosen-choices').type('Naren','{enter}',{foce:true})
       cy.get('.active-result').click()
    //    cy.get('.col-md-12 > :nth-child(3) > input').click()
       cy.get('#btnsubmit').click()

    })
    it('Edit Profile Visibility',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
       cy.get('#li2672').click()
       cy.get(':nth-child(3) > :nth-child(1) > .dropdown > .fa').click()
       cy.get(':nth-child(3) > :nth-child(1) > .dropdown > #ulList > :nth-child(1) > #btnEdit').click()
       cy.get('#btnsubmit').click()
})
it.only('Delete Profile Visibility',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
    // cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
   cy.get('#li2672').click()
   cy.get("tbody tr:nth-child(1) td:nth-child(1) div:nth-child(1) i:nth-child(1)").click({force: true})
   cy.get(':nth-child(1) > :nth-child(1) > .dropdown > #ulList > :nth-child(2) > #btnDelete').click({force: true})
   cy.get('.comfirmation-alert-box > .confirm-button > .btn-default').click()

})
})