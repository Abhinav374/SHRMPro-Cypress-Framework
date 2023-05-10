describe(' religion',()=>
{
    it('creating new religion ',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')

        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Sphinx@789$')
        cy.get('#btnSubmit').click()
        cy.get('.gallaryIcon').scrollIntoView({duration:2000})
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get ('#li82').click()
        cy.get('#li34').click()
        cy.get('#li310').click()
        cy.get('.add-emp-plus').click()
        cy.get('#txtRName').type('nadiu')
        cy.get('#btnSave').click()
        
    })
    it('creating new religion without mandatory fileds ',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')

        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Sphinx@789$')
        cy.get('#btnSubmit').click()
        cy.get('.gallaryIcon').scrollIntoView({duration:2000})
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get ('#li82').click()
        cy.get('#li34').click()
        cy.get('#li310').click()
        cy.get('.add-emp-plus').click()
        cy.get('#btnSave').click()
    })
    it('creating new religion on cliking resetbutton ',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')

        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Sphinx@789$')
        cy.get('#btnSubmit').click()
        cy.get('.gallaryIcon').scrollIntoView({duration:2000})
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get ('#li82').click()
        cy.get('#li34').click()
        cy.get('#li310').click()
        cy.get('.add-emp-plus').click()
        cy.get('#txtRName').type('nadhus')
        cy.get('#btnReset').click()
        
    })
    it('creating new religion on cliking save and new',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')

        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Sphinx@789$')
        cy.get('#btnSubmit').click()
        cy.get('.gallaryIcon').scrollIntoView({duration:2000})
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get ('#li82').click()
        cy.get('#li34').click()
        cy.get('#li310').click()
        cy.get('.add-emp-plus').click()
        cy.get('#txtRName').type('nadhus')
        cy.get('#btnSave_New').click()
        
        
    })
    it('creating new religion  on clinking three dots for edit.',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')

        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Sphinx@789$')
        cy.get('#btnSubmit').click()
        cy.get('.gallaryIcon').scrollIntoView({duration:2000})
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get ('#li82').click()
        cy.get('#li34').click()
        cy.get('#li310').click()
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown > .fa').click()
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > #btnEdit').click()
        cy.get('#ddlStatus').select('In-Active')
        cy.get('#btnSave').click()
    })
    it('creating new religion  on clinking three dots for delete.',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')

        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Sphinx@789$')
        cy.get('#btnSubmit').click()
        cy.get('.gallaryIcon').scrollIntoView({duration:2000})
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get ('#li82').click()
        cy.get('#li34').click()
        cy.get('#li310').click()
        cy.get(':nth-child(3) > :nth-child(1) > .dropdown > .fa').click()
        cy.get(':nth-child(3) > :nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2) > #btnDelete').click()
        cy.get('.comfirmation-alert-box > .confirm-button > .btn-danger').click()
    })

        
        
})