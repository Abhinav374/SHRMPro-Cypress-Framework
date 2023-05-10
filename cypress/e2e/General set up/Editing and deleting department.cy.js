describe('editing departments',()=>
{
    it('editing',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')

        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Sphinx@789$')
        cy.get('#btnSubmit').click()
        cy.get('.gallaryIcon').scrollIntoView({duration:2000})
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get ('#li82').click()
        cy.get('#li34').click()
        cy.get('#li21').click()
        cy.get('a[title="Department"]').click()
    
        //cy.get('#MenuContainer > ul > :nth-child(4) > a').click()
       // cy.get(':nth-child(1) > :nth-child(1) > .dropdown > .fa').click()
        cy.get(':nth-child(7) > :nth-child(1) > .dropdown > .fa').click()
        cy.get(':nth-child(7) > :nth-child(1) > .dropdown > #ulList > :nth-child(1) > #btnEdit').click()
        cy.get('#ddlStatus').select('In-Active')
        cy.get('.add-body-buttons > #btn_Save').click()
        
        
        
        
    })

    it('deleting',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')

        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Sphinx@789$')
        cy.get('#btnSubmit').click()
        cy.get('.gallaryIcon').scrollIntoView({duration:2000})
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get ('#li82').click()
        cy.get('#li34').click()
        cy.get('#li21').click()
        cy.get('a[title="Department"]').click()
        cy.get(':nth-child(6) > :nth-child(1) > .dropdown > .fa').click()
        cy.get(':nth-child(6) > :nth-child(1) > .dropdown > #ulList > #download-list > .btnDelete').click()
        cy.get('.comfirmation-alert-box > .confirm-button > .btn-danger').click()
        
        
        
        
    })
})