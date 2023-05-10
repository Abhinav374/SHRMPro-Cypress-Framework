describe('subdepartment',function()
{ 
    beforeEach(()=>
    {
     cy.fixture('user123.json').then((user)=>
     {
 this.cred=user
 })
 })
 
 it('moving to subdepartment page',()=>
 {
 cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')
 
 cy.login(this.cred.username,this.cred.password)
        cy.get('.icon-dashboard').trigger('mouseover')
        
        cy.get ('#li82').click()
        cy.get('#li34').click()
        cy.get('#li21').click()
        cy.get('#MenuContainer> ul > :nth-child(2)> a').click()
        cy.get('.common-heading-left > h1').should('be.visible')
  })

  it('adding record with save ',()=>
  

    {
    cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')
    cy.login(this.cred.username,this.cred.password)
    cy.get('.icon-dashboard').trigger('mouseover')
        
        cy.get ('#li82').click()
        cy.get('#li34').click()
        cy.get('#li21').click()
        cy.get('#MenuContainer> ul > :nth-child(2)> a').click()
        cy.get('.common-heading-left > h1').should('be.visible')
        cy.get('#add-emp-plus').click()
        cy.get('#div_header > h3').should('be.visible')
        cy.get('#ddlDepartment').select('Tester').should('be.visible')
        cy.get('#txtSubDept').type('QA')
        cy.get('#ddlstatus').select('Active')
        cy.get('#txtdesc').type('good things')
        cy.get('#btnSave').click()


    })

    it('adding record with saveand new ',()=>
  

    {
    cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')
    cy.login(this.cred.username,this.cred.password)
    cy.get('.icon-dashboard').trigger('mouseover')
        
        cy.get ('#li82').click()
        cy.get('#li34').click()
        cy.get('#li21').click()
        cy.get('#MenuContainer> ul > :nth-child(2)> a').click()
        cy.get('.common-heading-left > h1').should('be.visible')
        cy.get('#add-emp-plus').click()
        cy.get('#div_header > h3').should('be.visible')
        cy.get('#ddlDepartment').select('HR').should('be.visible')
        cy.get('#txtSubDept').type('BA')
        cy.get('#ddlstatus').select('Active')
        cy.get('#txtdesc').type('good VIBES')
        cy.get('#btnSaveNew').click()
        


    })

    it.only('adding record and reset ',()=>
  

    {
    cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')
    cy.login(this.cred.username,this.cred.password)
    cy.get('.icon-dashboard').trigger('mouseover')
        
        cy.get ('#li82').click()
        cy.get('#li34').click()
        cy.get('#li21').click()
        cy.get('#MenuContainer> ul > :nth-child(2)> a').click()
        cy.get('.common-heading-left > h1').should('be.visible')
        cy.get('#add-emp-plus').click()
        cy.get('#div_header > h3').should('be.visible')
        cy.get('#ddlDepartment').select('department 4').should('be.visible')
        cy.get('#txtSubDept').type('department')
        cy.get('#ddlstatus').select('Active')
        cy.get('#txtdesc').type('good thoughts')
        cy.get('#btbReset').click()
cy.get('div[onclick="slidepopupclose(),ResetField()"] i[class="fa fa-close"]').click()

        
        


    })

 })