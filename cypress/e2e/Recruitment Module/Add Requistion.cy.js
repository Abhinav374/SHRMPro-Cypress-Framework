describe('Add requisition',()=>{

    it('Create Requisition stage',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        
        cy.get('#li223').click(
        cy.get('#li1641').click({force: true}))
        cy.get('#btnAddPlusRequisition').click()
        cy.get('#dvCompany > #ddlCompany').select('Sphinx World Biz Ltd')
        cy.get('#ddlBranch').select('123-Noida sector 16')
        // cy.get('.chosen-single > span').select('IT-software')
        cy.get('#txt_jobTitle').type('Software Test Engineer')
        cy.get('#ddlEmploymentStatus').select('New')
        cy.get('#ddlExperienceFrom').type('3')
        cy.get('#ddlExperienceTo').type('5')
        cy.get('#ddlDesignation').select('Team Lead')
        cy.get(':nth-child(4) > :nth-child(4) > .ui-state-default').click({force: true})
      
        cy.get('#txtQualification_tag').type('Bachelor').type('{enter}')
        cy.get('#txtDegree_tag').type('B.Tech')
        cy.get('#txtSkills_tag').type('Python').type('{enter}')
        cy.get('#txtDescription').type('New Job Opportunity')
        cy.get('#btnNext').click()
        cy.get('#txtResponsibility').type('Python')
        cy.get('#btnAddQuestionair > .fa').click()
        cy.get('#txtResponsibility').type('HTML/CSS')
        cy.get('#btnNext').click()
        // cy.get('#ddlround_chosen > .chosen-choices').type('screen').type('{enter}')
        cy.get('#txtTotalPosition').type('7')
        cy.get('#ddlInterviewerName1_chosen > .chosen-choices').type('Khushboo').type('{enter}')
        cy.get('#btnNext').click()
        cy.get('#ddlSASkills_1').select('PPC')
        cy.get('#ddlSADiffLevel_1').select('Beginner')
        cy.get('#txtPassPer').type('70') 
        cy.get('#txtTotalQuesByKeyword').type('10')
        cy.get('#txtMaxQues').type('5')
        cy.get('#btngenerateQuestion').click()
        cy.get('#btnDone').click()
    })
    it('Edit Requisition stage',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        
        cy.get('#li223').click(
        cy.get('#li1641').click({force: true}))
        // cy.get(':nth-child(1) > :nth-child(1) > .dropdown > .fa').click()
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown > #ulList > :nth-child(1) > #btnEdit').click({force: true})
        cy.get('#txtSkills_tag').type('Python').type('{enter}')
        cy.get('#btnNext').click()
        cy.get('#btnNext').click()
        cy.get('#btnNext').click()
        cy.get('#btnDone').click()
    })
    it.only('Delete Requisition stage',()=>{
        cy.visit('http://hrms219.sphinxworldbiz.com:4085/LoginNew.aspx ')
        
        cy.loginapp('administrator','Admin@1234')
        cy.get('#employeeSatisfaction > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.icon-dashboard').trigger('mouseover').click()
        
        cy.get('#li223').click()
        cy.get('#li1641').click({force: true})
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown > .fa').click()
        cy.get(':nth-child(1) > :nth-child(1) > .dropdown > #ulList > :nth-child(2) > #btnDelete').click()
        cy.get('#div_Confirmation > .confirm-button > .btn-default').click()
})
})
