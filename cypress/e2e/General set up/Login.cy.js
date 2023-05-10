describe('Login',function()
{
   beforeEach(()=>
   {
    cy.fixture('user123.json').then((user)=>
    {
this.cred=user
})
})

it('custom cammonds',()=>
{
cy.visit('http://hrms219.sphinxworldbiz.com:2045/LoginNew.aspx')

cy.login(this.cred.username,this.cred.password)
 })

 
})