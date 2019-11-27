/* global cy */

describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('opens with Fall CS courses', () => {
    cy.visit ('/');
    cy.get('.course').should('contain', 'Fall CS');
  });

  it('shows Winter courses when Winter is selected', () => {
    cy.visit ('/');
    cy.contains('Winter').click();
    cy.get('.course').should('contain' ,'Winter');
  });
});