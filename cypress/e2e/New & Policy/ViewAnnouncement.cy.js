describe('view the announcement',()=>
{
    it('Visit the url',()=>
    {
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        cy.loginapp('administrator','Admin@1234')
       
       
       cy.get('.icon-dashboard').trigger('mouseover')
       cy.get('.icon-settings').click()
       cy.get('#li93').click()
       cy.get('#li26').click()
       cy.get('#tbl_tblnewsannouncementBody > :nth-child(3) > :nth-child(2) > a > .fa').click()
    })
})

