/// <reference types="cypress" />

describe ('', () => {
    before('', () => {
        cy.visit('http://localhost:1667/#/login');
    })

    it('sign in', () => {
        cy.get(':nth-child(1) > .form-control').type('vriv@podriv.ri');
        cy.get(':nth-child(2) > .form-control').type('Z@viv000');
        cy.get('.btn').click();

        cy.get('.navbar').contains('vriv').should('exist');
    });
});
