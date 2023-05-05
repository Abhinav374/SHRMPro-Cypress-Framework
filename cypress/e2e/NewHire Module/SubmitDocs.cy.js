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
   
    cy.get(':nth-child(5) > #a4').click()
    cy.xpath("//li[@id='EditRecord']//i[@class='fa fa-pencil']").click()
    cy.get('.button-top > a').click({force: true})
    cy.get('#FileIdStatus_0').click()
    cy.get('#FileIdStatus_3').click()
    cy.get('#FileIdStatus_4').click()
    cy.get('#FileIdStatus_6').click()
    cy.get('#FileIdStatus_7').click()
    cy.get('#FileIdStatus_8').click(
    cy.xpath("//input[@onclick='Savedocumentlist();']").click()
    )

})

})