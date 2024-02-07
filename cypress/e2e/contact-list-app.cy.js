describe('login testing', () => {
  it('should allow signed-in users to login and display success message', () => {

    //visit the website
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')

    //filling the fields
    cy.get('#email').type("doricyj@gmail.com")
    cy.get('#password').type("doris123")

    // Click the submit button
    cy.get('button[type="submit"]').click();

    // Assert that the form submission is successful
    cy.url().should('include', '/success');
    cy.contains('Login successful').should('exist');

    

  })
})