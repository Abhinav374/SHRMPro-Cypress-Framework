describe('Recruitment setting',()=>{

    it('Create Common Round',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li192').click()
        cy.get('.add-emp-plus').click()
        cy.get('#txtRoundname').type('Telephonic Round')
        cy.get('.add-body-buttons > #btn_Save').click()
    })


    it('Edit Common Round',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
      
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li190').click()
        cy.get('#li192').click()
        cy.get(':nth-child(9) > :nth-child(1) > .dropdown > .fa').click()
        cy.get(':nth-child(9) > :nth-child(1) > .table-more-drop > .dropdown-menu > :nth-child(1) > #btnEdit').click()
        cy.get('.add-body-buttons > #btn_Save').click()
})

it.only('Delete Common Round',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('administrator','Admin@1234')
  
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li82').click()
    cy.get('#li190').click()
    cy.get('#li192').click()
    cy.get(':nth-child(9) > :nth-child(1) > .dropdown > .fa').click()
    cy.get(':nth-child(9) > :nth-child(1) > .table-more-drop > .dropdown-menu > :nth-child(2) > #btnDelete').click()
    cy.get("input[onclick='confirmationclose()']").click()

})

})