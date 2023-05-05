describe('ToDo list',()=>{

    it('View record',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx ')
        
        cy.loginapp('administrator','Sphinx@789$')
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('a[id="li223"] span[class="arrow"]').click({force: true} )
        cy.get('#li214').click()
         cy.get('#btn_View').click() 
        
        //  cy.scrollIntoView(':nth-child(10) > .form-group > label')
        // cy.scrollTo('bottom',{force:true})
        cy.wait(7000)
       cy.xpath("//div[contains(@class,'form-group')]//label[contains(text(),'Remarks')]").scrollIntoView({duration:6000})
       cy.xpath("//div[contains(@class,'form-group')]//label[contains(text(),'Remarks')]").should('contain','Remark')
    })





    })    