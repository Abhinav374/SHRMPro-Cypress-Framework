describe('NewHire list',()=>{

    it('Complete onboarding',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        // change contact no
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li81').click()
        cy.get('#li1560').click()
        cy.get('#li1567').click()
        cy.get('.fa.fa-filter').click()
        cy.get('#txtSPersonalEmail').type('rakesh.s@yopmail.com')
        cy.get("input[value='Search']").click()
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown > .fa').click()
        cy.get('#btnADDemp').click()  
        cy.get('#txtDOB').type('01-31-1990') 
        cy.get('#ddlgender').select('Male') 
        cy.get('#ddlRoleName').select('Software Tester')
        cy.get('#ddlUniqueDocumentType').select('Unique Identification Authority of India(UIDAI)')
        cy.get('#txtAdharNo').type('958423078914')
        cy.get('#ddlWorkerType').select('Permanent')
        cy.get('#txtReportingManager').type('Amardeep')
        cy.get('#slide_popupAddEmployee > .slide-popup-inner > .add-body-buttons > .btn-success').click()
    })

})
//div[class='dropdown table-more-drop open']//a[id='btnADDemp']
