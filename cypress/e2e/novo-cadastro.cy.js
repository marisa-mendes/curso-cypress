describe('Login', () =>{
    it('Deve logar com sucesso', () => {
        cy.viewport(1440,900);
        cy.visit('https://adopet-frontend-cypress.vercel.app/');

        cy.get('[data-test="register-button"]').click();
        cy.get('[data-test="input-name"]').type('Ana Clara');
        cy.get('[data-test="input-email"]').type('ana.clara@teste.com.br');
        cy.get('[data-test="input-password"]').type('Senha123');
        cy.get('[data-test="input-confirm-password"]').type('Senha123');

        cy.get('[data-test="submit-button"]').click();

    })

})