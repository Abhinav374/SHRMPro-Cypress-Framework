describe('ToDo list',()=>{

    it('Edit record',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx ')
        
        cy.loginapp('administrator','Sphinx@789$')
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('a[id="li223"] span[class="arrow"]').click({force: true} )
        cy.get('#li214').click()

    })







    
})