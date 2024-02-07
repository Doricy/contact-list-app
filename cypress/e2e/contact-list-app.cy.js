describe('template spec', () => {
  it('should fill the form, submit, and assert that everything works ', () => {

    //visit the website
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')

    //filling the fields
    cy.get('#email').type("doricyj@gmail.com")
    cy.get('#password').type("doris123")

  })
})