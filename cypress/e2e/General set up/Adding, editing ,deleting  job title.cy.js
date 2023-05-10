describe(' Jobtitle',()=>
{
    it(' Adding ',()=>
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
       // cy.get('#MenuContainer > ul > :nth-child(6) > a').click
       cy.get('#MenuContainer > ul > :nth-child(6) > a').click()
       cy.get('.add-emp-plus').click()
       cy.get('#txtdesignation').type('teaters')
       cy.get('#ddlJobLevel').select('Director')
       cy.get('#ddl_Status').select('Active')
       cy.get('.add-body-buttons > #btn_Save').click()
    })

    it.only(' editing ',()=>
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
       cy.get('#MenuContainer > ul > :nth-child(6) > a').click()
      cy.get(' [id="tbl_Designation"]> tbody> tr:nth-child(1)>td:nth-child(1)').click()
      cy.get(':nth-child(1) > :nth-child(1) > .dropdown > #ulList > :nth-child(1) > #btnEdit').click({force: true} )
      cy.get('.add-body-buttons > #btn_Save').click()

    })

    it.only(' deleting ',()=>
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
       cy.get('#MenuContainer > ul > :nth-child(6) > a').click()
      cy.get(' [id="tbl_Designation"]> tbody> tr:nth-child(1)>td:nth-child(1)').click()
      cy.get(':nth-child(1) > :nth-child(1) > .dropdown > #ulList > #download-list > #btnDelete').click({force: true} )
      cy.get('.comfirmation-alert-box > .confirm-button > .btn-danger').click()

    })
})