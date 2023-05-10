//const { describe } = require("mocha");

describe('viewing the empolyee',()=>
{
    it('view the employee',()=>
    {

        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx')
        cy.get('#txtUsername').type('administrator')
cy.get('#txtPassword').type('Admin@1234')
cy.get('#btnSubmit').click()
cy.get('.icon-dashboard').trigger('mouseover')
cy.get('#li81').click()
        cy.get('#li4').click()
        cy.get('#li39').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2) > a > .fa').click()
        cy.get('#QuickView > .slide-popup-inner > .slide-popup-head > .slide-popup-left > h3').should('be.visible')
        cy.get('#QuickView > .slide-popup-inner > .slide-popup-head > .slide-popup-right > .closes > .fa').click()


        
    

    })
})