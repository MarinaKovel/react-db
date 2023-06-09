/// <reference types="cypress" />

describe('E2E cypress tests', () => {
  it('should visit main', () => {
    cy.visit('/');
    cy.title().should('eq', 'React DB');
    cy.get('input').should('be.enabled');
    cy.get('section').should('have.class', 'cards-container');
    cy.get('section').within(() => {
      cy.get('div').should('have.class', 'card');
      cy.get('.card').first().click();
    });
    cy.get('div').should('have.class', 'modal__window');
  });
  it('should visit form', () => {
    cy.visit('/form');
    cy.get('form').within(() => {
      cy.get('h1').should('have.text', 'Movie adviser');
      cy.get('p').should('have.text', 'All the fields are required!Reason:');
      cy.get('div').should('have.class', 'form__radio');
      cy.get('button').click();
    });
  });
  it('should visit about', () => {
    cy.visit('/about');
    cy.get('div').should('have.class', 'about');
    cy.get('p').should('have.class', 'project');
  });
  it('should visit notfound', () => {
    cy.visit('/notfound');
    cy.get('div#root').within(() => {
      cy.get('div').should('have.text', 'This page does not exist. Go to Main page');
      cy.get('div').within(() => {
        cy.get('a[href*="/"]').click();
      });
    });
  });
});
