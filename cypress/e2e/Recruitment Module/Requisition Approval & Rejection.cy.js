describe('Requisition Approval/Rejection',()=>{

    it('Approve Requisition',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('amardeep.s@sphinxworldbiz.co','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('a > :nth-child(1) > .fa').click()
        cy.get(':nth-child(1) > a > .notification-outer > .notification-title').click()
        cy.get('#btnRequisitionApprove').click({force: true})

    })
    it.only('Reject Requisition',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('amardeep.s@sphinxworldbiz.co','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('a > :nth-child(1) > .fa').click()
        cy.get(':nth-child(1) > a > .notification-outer > .notification-title').click()
        cy.get('#btnRequisitionReject').click()
})
})