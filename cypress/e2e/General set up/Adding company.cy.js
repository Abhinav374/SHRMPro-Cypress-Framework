describe('Adding company',function()
{
   beforeEach(()=>
   {
    cy.fixture('user123.json').then((user)=>
    {
this.cred=user
})
})

it('custom cammonds',()=>
{
cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')

cy.login(this.cred.username,this.cred.password)


cy.get('.icon-dashboard').trigger('mouseover')
           cy.get ('#li82').click()
           cy.get('#li34').click()
           cy.get('#li21').click()
           cy.get('a[title="Company"]').should('be.visible')
           cy.get('.fa.fa-plus').click()
           cy.get('#div_header > h3').should('be.visible')
           cy.get('#txt_companyName').type('delotitee')
           cy.get('#txt_companyCode').type('654321')
           cy.get('#txt_ZipCode').type('518009')
           cy.get('#txt_Address1').type('76/105/6a3')
           cy.get('#ddlcountry').select('INDIA')
           cy.get('#ddlTimeZone').select('India')
          cy.get('#ddlCurrency_chosen').click()
          cy.get('#ddlCurrency_chosen').click()
          cy.get('div[class="chosen-drop"] li:nth-child(3)').click()
          cy.get('div[class="chosen-drop"] li:nth-child(5)').click({force: true})
          cy.get('div[class="chosen-drop"] li:nth-child(2)').click({force: true})
          cy.get("#ddlPaytype_chosen").click()
          cy.get('.chosen-results').contains('Daily').click()
          cy.get('#ddlDateTimeFormat').select('DD-MM-YYYY')
          cy.get('#ddlNumberFormat').select('123,456.78')
          cy.get('#ddlDisplayName').select('{First name} {Last name}')
          cy.get('.add-body-buttons > #btn_Save').click()
          cy.get('#DivCompany > .slide-popup-inner > .slide-popup-head > .slide-popup-right > .closes > .fa').click()
          //cy.get('[style="width: 164px;"]').click( {force: true})
          //cy.get('[style="width: 164px;"]').click( {force: true})
          cy.xpath('//th[contains(text(),"CompanyName")]').click()
          cy.xpath('//th[contains(text(),"CompanyName")]').click()
})
})