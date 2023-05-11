describe('accepting the asset',()=>
{
    it('login with asset allocated empolyee',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx')

        cy.get('#txtUsername').type('Sphi/0045')
        cy.get('#txtPassword').type('Admin@1234')
        cy.get('#btnSubmit').click()
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get('#li81').click()
        cy.get('#li76').click()
        cy.get('#li33').click()
        cy.get(':nth-child(8) > #btnApprove > .fa').click()
        cy.get('.comfirmation-alert-box > .confirm-button > .btn-danger')
    })
        it('login with asset allocated empolyee',()=>
        {
            cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx')
    
            cy.get('#txtUsername').type('Sphi/0045')
            cy.get('#txtPassword').type('Admin@1234')
            cy.get('#btnSubmit').click()
            cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
            cy.get('.icon-dashboard').trigger('mouseover')
        })
    })







    
