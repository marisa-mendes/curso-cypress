describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('input[name="nome"]').type('Max');
    cy.get('[data-test="input-email"]').type('max@teste.com.br');
    cy.get('#pass-create').type('Max123456');
    cy.get('#pass-confirm').type('Max123456');
    cy.get('[data-test="submit-button"]').click();

  })
  it('Carregar a página corretamente e clicar no botão "Ver pets disponíveis para adoção"', () =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click()

  })
  it('Visitar a página principal do AdoPet e testar os botões de Home', () =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click()

  })
  it('Visitar a página de /login do AdoPet', () =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')

  })
  it('Visitar a página /home do AdoPet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')

  })
  it('Visitar a página /home e clicar em "Falar com responsável"', () =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.header__message').click()
    
  })

})