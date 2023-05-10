describe(' Asset Processers',()=>
{
    it('asset inventory ',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx')

        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Admin@1234')
        cy.get('#btnSubmit').click()
        cy.get('.gallaryIcon').scrollIntoView({duration:2000})
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get('#li81').click()
        cy.get('#li76').click()
        cy.get('#li74').click()
        cy.get('.add-emp-plus > .fa').click()
        cy.get('#ddlCompany').select('1')
        cy.get('#ddl_AssetType_chosen > .chosen-single > span').click()
        cy.get('div[id="ddl_AssetType_chosen"] input[type="text"]').type('max').type('{enter}')
        cy.get('#ddl_Manufacturer_chosen > .chosen-single > span').click()
        cy.get('div[id="ddl_Manufacturer_chosen"] input[type="text"]').type('maxmiunm').type('{enter}')
        cy.get('#ddl_Vendor_chosen > .chosen-single > span').click()
       cy.get('div[id="ddl_Vendor_chosen"] input[type="text"]').type('cvmm').type('{enter}')
       cy.get('#txt_SerialNumber').type('08091992')
       cy.get('#txt_DateofPurchase').type('09-09-2022',{force: true})
       cy.get('#ddl_Status').select('1')
       cy.get('#txt_Description').type('have touch good')
       cy.get('.add-body-buttons > #btn_Save').click()
       
    
        
    })
    it.only('asset allocation ',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx')

        cy.get('#txtUsername').type('administrator')
        cy.get('#txtPassword').type('Admin@1234')
        cy.get('#btnSubmit').click()
        cy.get('.gallaryIcon').scrollIntoView({duration:2000})
        cy.get('.icon-dashboard').trigger('mouseover')
        cy.get('#li81').click()
        cy.get('#li76').click()
        cy.get('#li75').click()
        cy.get('.add-emp-plus').click()
        cy.get('#ddlCompany').select('1')
        cy.get('#ddlBranch').select('4')
        cy.get('#ddl_AssetType').select('max')
        cy.get('#ddl_Manufacturer').select('maxmiunm')
        //cy.wait(4000)
        //cy.xpath('(//select[@id="ddl_SerialNumber"])[1]').click().trigger('mouseover')
        cy.get('#ddl_SerialNumber_chosen').click() 
       cy.get('.chosen-choices').click()
       cy.get('.active-result').click()
        //cy.get('.add-body-buttons > #btn_Save').click()
        cy.get('.add-body-buttons > #btn_Save').click()
        
    })

})