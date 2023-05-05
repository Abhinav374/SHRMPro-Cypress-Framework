describe('NewHire list',()=>{

    it('UpdateWorkInfo',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        
        cy.get('.icon-dashboard').trigger('mouseover').click()
        cy.get('#li81').click()
        cy.get('#li1560').click({force: true})
        cy.get('#li1567').click()
        cy.get('.fa.fa-filter').click()
        cy.get('#txtSPersonalEmail').type('rakesh.s@yopmail.com')
        cy.get("input[value='Search']").click()
        cy.get('.dropdown > .fa').click()
        cy.get("a[href='/NewHiring/CandidateList/CandidatebasicProfile/40447']").invoke('removeAttr','target').click()
         cy.get(':nth-child(4) > #a4').click()
        // cy.xpath("//div[@class='page-content-wrapper']//li[1]//a[1]").click()
        cy.xpath("//li[@id='EditRecord']//i[@class='fa fa-pencil']").click()
        cy.get('#btnupload').click()
        cy.get('#txtcomp').type('Sphinx')
        cy.get('#txtdesignation').type('QA')
        cy.get('#txtjobprofile').type('Software Test Engineer')
        cy.get('#txtctc').type('500000')
        cy.get('#Ntxtfrom').type('10-25-2021',{force: true})
        cy.get('#Ntxtto').type('05-03-2023',{force: true})
        cy.get('#txtreportingto').type('Amardeep')
        cy.get('#chk_curEmployer').click()
        cy.get('#btnsave').click()


    })

})