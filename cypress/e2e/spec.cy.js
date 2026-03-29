describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Max');
    cy.get('#email').type('max@teste.com.br');
    cy.get('#pass-create').type('Max123456');
    cy.get('#pass-confirm').type('Max123456');
    cy.contains ('button', 'Cadastrar').click();

  })
})