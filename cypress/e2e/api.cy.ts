/// <reference types="cypress" />

describe('Check api request', () => {
  it('Get 200 status for all Characters', () => {
    cy.request({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character`,
    }).as('getResults');

    cy.get('@getResults').should((response: unknown) => {
      expect((response as Response).status).to.eq(200);
      expect(response).to.have.property('headers');
      expect((response as Response).body).to.have.property('results');
    });
  });

  it('Get 200 status for Search', () => {
    cy.request({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/?name=einstein`,
    }).as('getResults');

    cy.get('@getResults').should((response: unknown) => {
      expect((response as Response).status).to.eq(200);
      expect(response).to.have.property('headers');
      expect((response as Response).body).to.have.property('results');
    });
  });

  it('Get 200 status for one Character', () => {
    cy.request({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/1`,
    }).as('getResults');

    cy.get('@getResults').should((response: unknown) => {
      expect((response as Response).status).to.eq(200);
      expect(response).to.have.property('headers');
      expect((response as Response).body).to.have.property('id');
    });
  });
});
