describe('Employee verification settings',()=>{

    it('Verification settings',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li137').click()
        cy.get('#li136').click()
        cy.get('#add-emp-plus').click()
        cy.get('#ddlCompany').select('Sphinx World Biz Ltd')
        cy.get('#ddlBranch').select('123-Noida sector 16')
        cy.get('#ddlVerificationtype').select('Post')
        cy.get('#ddlVerificationCategory').select('Category 1')
        cy.get('#txtdescrip').type('Documents verification')
        cy.get('#btnsave').click()

    })


})