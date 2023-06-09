describe('View requisition',()=>{
it('View requisition',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    
    cy.loginapp('rajatpython94@gmail.com','Admin@1234')
    // cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li478').click()
    cy.get('#li1637').click()
    cy.get('#li1662').click()
    cy.get('tbody > :nth-child(1) > :nth-child(2) > a > .fa').click()
    cy.get('#txtDescriptionReq').scrollIntoView({duration:3000})

})
it.only('Check view requisition option before approving/rejecting erquisition',()=>{
    cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
    // cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
    cy.loginapp('amardeep.s@sphinxworldbiz.co','Admin@1234')
    cy.get('.icon-dashboard').trigger('mouseover').click()
    cy.get('#li478').click()
    cy.get('#li1637').click()
    cy.get('#li1642').click()
    cy.get(':nth-child(1) > .sorting_1 > a > .fa').click()
})
})