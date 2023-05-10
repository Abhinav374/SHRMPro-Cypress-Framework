describe('deleting company',()=>
{
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
        cy.get('a[title="Company"]').should('be.visible')
    //cy.get('table[id="Tb_CompanyGeneralInformation"]> thead> tr').click({force: true})
    cy.get(':nth-child(1) > .sorting_1 > .dropdown > .fa').click()
    cy.get(':nth-child(1) > .sorting_1 > .dropdown > #ulList > :nth-child(2) > #btnDelete').click()
    cy.get('.comfirmation-alert-box > .confirm-button > .btn-danger').click()




        
    })
})
