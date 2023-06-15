describe(' Filter search',()=>{
    // Basic fliter search
    it('Location wise filter search',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('rajatpython94@gmail.com','Admin@1234')
        //  cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li478').click()
        cy.get('#li1637').click()
        cy.get('#li1662').click()
        cy.get('#filter-drop').click()
        cy.get('#ddlBranchsearch').select('123-Noida')
        cy.get('#btnsearchBasic').click()
    })
   
    it('Client type filter search',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('rajatpython94@gmail.com','Admin@1234')
        //  cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li478').click()
        cy.get('#li1637').click()
        cy.get('#li1662').click()
        cy.get('#filter-drop').click()
        cy.get('#ddlClient_chosen > .chosen-choices > .search-field > .default').type('Abc').type('{enter}')
        cy.get('#btnsearchBasic').click()
    })
    it('Requsition type filter search',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('rajatpython94@gmail.com','Admin@1234')
        //  cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li478').click()
        cy.get('#li1637').click()
        cy.get('#li1662').click()
        cy.get('#filter-drop').click()
        cy.get('#ddljobType').select('New')
        cy.get('#btnsearchBasic').click()
    })
    // Advance search
    it('Requsition type filter search',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('rajatpython94@gmail.com','Admin@1234')
        //  cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li478').click()
        cy.get('#li1637').click()
        cy.get('#li1662').click()
        cy.get('#filter-drop').click()
        cy.get('.search-menu').click()
        cy.get('#ddljobType').select('New')
        cy.get('#btnsearchBasic').click()
    })
    // No reocrd found
    it.only('Requsition type filter search',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('rajatpython94@gmail.com','Admin@1234')
        //  cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li478').click()
        cy.get('#li1637').click()
        cy.get('#li1662').click()
        cy.get('#filter-drop').click()
        cy.get('.search-menu').click()
        cy.get('#ddljobType').select('New')
        cy.get('#btnsearchBasic').click()
    })
})