class RegisterPage {
   
    acessoAPaginaDeCadastro() {
        // Acesso a pagina de cadastro
        cy.get('strong').click()
        cy.get('h1').should('have.text', 'Cadastro de ponto de doação')
    }

    preenchoOFormulario(nome,email, cep, numero, complemento) {
        // Preencho o formulário
        cy.get('input[name="name"]').type(nome)
        cy.get('input[name="email"]').type(email)
        cy.get('input[name="cep"]').type(cep)
        cy.get('input[type="button"]').click()
        cy.get('input[name="addressNumber"]').type(numero)
        cy.get('input[name="addressDetails"]').type(complemento)
        cy.get('img[alt="Gatos"]').click()
    }

    envioOFormulario() {
        cy.get('button[class="button-register"]').click()
    }

    efetuoOCadastro() {
        // Efetuo o cadastro
        cy.get('h1').should('have.text', 'Você fez a diferença!')
    }
    
    validoOErro(erro){
        // Visualizo a mensagem de erro
        cy.contains('span[class="alert-error"]', erro).should('be.visible')
    }
}

export default RegisterPage