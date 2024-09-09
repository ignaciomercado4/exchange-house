/// <reference types="cypress" />

describe('exchange house', () => {
  beforeEach('should visit URL', () => {
    cy.visit('http://127.0.0.1:8080');
  });

  it('should verify that inputs and calculate button exists', () => {
    cy.get('#initial-currency').should('be.visible');
    cy.get('#final-currency').should('be.visible');
    cy.get('#initial-amount').should('be.visible');
    cy.get('#final-amount').should('be.visible');
    cy.get('#calculate').should('be.visible');
  });

  it('should select currencies', () => {
    cy.get('#initial-currency').select('USD');
    cy.get('#initial-currency').should('have.value', 'USD');
    cy.get('#final-currency').select('ARS');
    cy.get('#final-currency').should('have.value', 'ARS');
  });

  it('should type initial amount', () => {
    cy.get('#initial-amount').type('10000');
    cy.get('#initial-amount').should('have.value', '10000');
  });

  it('should convert amounts correctly', () => {
    cy.get('#initial-currency').select('USD');
    cy.get('#initial-currency').should('have.value', 'USD');
    cy.get('#final-currency').select('USD');
    cy.get('#final-currency').should('have.value', 'USD');


    cy.get('#initial-amount').type('10000');
    cy.get('#initial-amount').should('have.value', '10000');

    cy.get('#calculate').click();

    cy.get('#final-amount').should('have.value', '10000.00 USD');
  });


})