describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Mel Vitória');
    cy.get('#email').type('mel.vitoria@teste.com.br');
    cy.get('#pass-create').type('Mel123456');
    cy.get('#pass-confirm').type('Mel123456');
    cy.contains ('button', 'Cadastrar').click();

  })
})