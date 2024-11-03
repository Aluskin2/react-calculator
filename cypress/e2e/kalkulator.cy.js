describe('Kalkulator React', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Powinien mieć dwa pola tekstowe do wprowadzania liczb', () => {
        cy.get('input').first().type('5').should('have.value', '5');
        cy.get('input').last().type('3').should('have.value', '3');
    });

    it('Powinien wykonywać dodawanie poprawnie', () => {
        cy.get('input').first().type('10');
        cy.get('input').last().type('5');
        cy.contains('+').click();
        cy.get('.result span').should('have.text', '15');
    });

    it('Powinien wykonywać odejmowanie poprawnie', () => {
        cy.get('input').first().type('10');
        cy.get('input').last().type('5');
        cy.contains('-').click();
        cy.get('.result span').should('have.text', '5');
    });

    it('Powinien wykonywać mnożenie poprawnie', () => {
        cy.get('input').first().type('10');
        cy.get('input').last().type('5');
        cy.contains('*').click();
        cy.get('.result span').should('have.text', '50');
    });

    it('Powinien wykonywać dzielenie poprawnie', () => {
        cy.get('input').first().type('10');
        cy.get('input').last().type('5');
        cy.contains('/').click();
        cy.get('.result span').should('have.text', '2');
    });

    it('Powinien obsługiwać dzielenie przez zero', () => {
        cy.get('input').first().type('10');
        cy.get('input').last().type('0');
        cy.contains('/').click();
        cy.get('.result span').should('have.text', 'Błąd: Dzielenie przez zero!');
    });

    it('Powinien wyświetlać błąd przy braku liczby', () => {
        cy.get('input').first().clear();
        cy.get('input').last().clear();
        cy.contains('+').click();
        cy.get('.result span').should('have.text', 'Błąd: Wprowadź liczby!');
    });
});