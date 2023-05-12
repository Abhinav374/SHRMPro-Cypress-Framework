describe(' Asset mangamment',()=>
{
    it('asset type ',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx')

        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Admin@1234')
        cy.get('#btnSubmit').click()
        cy.get('.gallaryIcon').scrollIntoView({duration:2000})
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get ('#li82').click()
        cy.get('#li1569').click()
        cy.get('#li1578').click()
        cy.get('.add-emp-plus').click()
        cy.get('#txt_AssetType').type('max')
        cy.get('.add-body-buttons > #btn_Save').click()
        
    })

    it('asset manufactures ',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx')

        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Admin@1234')
        cy.get('#btnSubmit').click()
        cy.get('.gallaryIcon').scrollIntoView({duration:2000})
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get ('#li82').click()
        cy.get('#li1569').click()
        cy.get('#li1579').click()
        cy.get('.add-emp-plus').click()
        cy.get('#txt_manufacturer').type('maxmiunm')
        cy.get('.add-body-buttons > #btn_Save').click()
    
        
    })
    it('asset vendor ',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx')

        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Admin@1234')
        cy.get('#btnSubmit').click()
        cy.get('.gallaryIcon').scrollIntoView({duration:2000})
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get ('#li82').click()
        cy.get('#li1569').click()
        cy.get('#li1580').click()
        cy.get('.add-emp-plus').click()
        cy.get('#txt_name').type('cvmm')
        cy.get('#txt_contactno').type('9786867676')
        cy.get('#txt_contactperson').type('ms')
        cy.get('#txtAddress').type('76/105/6a6')
        cy.get('#btn_Save_New').click()
    

        
    })


})