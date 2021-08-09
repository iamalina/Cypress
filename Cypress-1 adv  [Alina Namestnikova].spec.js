/// <reference types="cypress" />

describe ('sign up', () => {
    let user;

    before('open login page', () => {
        cy.visit('http://localhost:1667/#/');
        cy.task("freshUser").then((object) => {
            user = object;
        });
    })

    it('log in', () => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type(user.username);
        cy.get(':nth-child(2) > .form-control').type(user.email);
        cy.get(':nth-child(3) > .form-control').type(user.password);
        cy.get('.btn').click();

        cy.get('.swal-modal').contains('Your registration was successful!').should('exist');
        cy.get('.swal-button').click();

        cy.get(':nth-child(4) > .nav-link').should('contain', user.username);
    });
});
