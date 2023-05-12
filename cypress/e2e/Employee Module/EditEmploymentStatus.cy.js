describe('NewHire list',()=>{

    it('Complete onboarding',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li82').click()
        cy.get('#li137').click()
        cy.get('#li414').click()
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown > .fa').click()
        cy.xpath("//div[@class='dropdown table-more-drop open']//a[@id='btnEdit']").click()
        cy.get('#ddlStatus').select('In-Active')
        cy.xpath("//div[@class='add-body-buttons']//input[@id='btn_Save']").click()



    })


})