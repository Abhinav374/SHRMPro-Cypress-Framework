describe('Adding departments',()=>
{
    it('Adding',()=>
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
        cy.get('#MenuContainer > ul > :nth-child(4) > a').click()
        cy.get('.add-emp-plus').click()
        cy.get('#txt_DepName').type('Quality assurence')
        cy.get('#ddlStatus').select('Active')
        cy.get('#btn_Save_New').click()
        
    })
})