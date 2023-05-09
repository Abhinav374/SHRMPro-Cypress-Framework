describe('Employee details',()=>
{
    it('Employee details',()=>
    
        {
            cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
            cy.loginapp('administrator','Admin@1234')
           
            cy.get('.icon-dashboard').trigger('mouseover')
            cy.get('#li81').click()
            cy.get('#li4').click()
            cy.get('#li39').click()
          
           cy.get('[data-dt-idx="2"]').click()
           cy.get(':nth-child(9) > :nth-child(5)').click()
           cy.get('#ltrlUserName').click()
           cy.get('#logOut').click()
           cy.get('#txtUsername').type('aarupande1@gmail.com')
           cy.get('#txtPassword').type('Admin@1234')
           cy.get('#btnSubmit').click()
           cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
           cy.get(':nth-child(15) > .card-outer > .card-heading-section > h3').scrollIntoView({duration:2000})
                     

        })
    })
