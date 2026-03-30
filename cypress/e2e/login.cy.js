
describe('Login de usuário', () => {
    it('Deve fazer login', () =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
        cy.get('[data-test="input-loginEmail"]').type('ana.clara@teste.com.br');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click()
    })

    })