describe('NewHire list',()=>{

    it('Update Education Details',()=>{
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
       
        cy.xpath("//a[@id='a3']").click()
        cy.xpath("//li[@id='EditRecord']//i[@class='fa fa-pencil']").click()
        cy.get('#btnpresent').click()
        cy.get('#ddlstandard').select("Bachelor's")
        cy.get('#ddlboarduniversity').select('cbse(Delhi-Delhi-INDIA)')
        cy.get('#chk_Hieghestqualification').click()
        cy.get('#txtcollege').type('Amity University')
        cy.get('#txtsubject').type('Computer Science')
        cy.get('#ddlyear').select('2013')
        cy.get('#txtmarks').type('75')
        cy.get('#ddlgrade').select('A')
        cy.get('#btnSaveAcademic').click()



    })
})