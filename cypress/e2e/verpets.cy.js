describe('Boas-vindas!' ,() => {
    it('Ver pets disponíveis para adoção' , () =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('a', 'Ver pets disponíveis para adoção').click();

    })
})