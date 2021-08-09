/// <reference types="cypress" />

describe ('login', () => {
    before('open login page', () => {
        cy.visit('http://localhost:1667/#/login');
    })

    it('log in', () => {
        cy.get(':nth-child(1) > .form-control').type('vriv@podriv.ri');
        cy.get(':nth-child(2) > .form-control').type('Z@viv000');
        cy.get('.btn').click();

        cy.get('.navbar').contains('vriv').should('exist');
    });
});
