describe('Cadastro', () => {
    it('Cadastrar ponto de doação com sucesso', () => {

        // Acesso a home do site
        cy.visit('https://petlov.vercel.app/')
        cy.get('h1').should('have.text', 'Conectando corações, mudando vidas!')

        // Acesso a pagina de cadastro
        cy.get('strong').click()
        cy.get('h1').should('have.text', 'Cadastro de ponto de doação')

        // Preencho o formulário
        cy.get('input[name="name"]').type('Agro EDY')
        cy.get('input[name="email"]').type('dhz@gmail.com')
        cy.get('input[name="cep"]').type('07661195')
        cy.get('input[type="button"]').click()
        cy.get('input[name="addressNumber"]').type('356')
        cy.get('input[name="addressDetails"]').type('Colinas 2')
        cy.get('img[alt="Gatos"]').click()
        cy.get('button[class="button-register"]').click()
        // Efetuo o cadastro
        cy.get('h1').should('have.text', 'Você fez a diferença!')

    })

    it('Não deve realizar cadastro com e-mail inválido', () => {

        // Acesso a home do site
        cy.visit('https://petlov.vercel.app/')
        cy.get('h1').should('have.text', 'Conectando corações, mudando vidas!')

        // Acesso a pagina de cadastro
        cy.get('strong').click()
        cy.get('h1').should('have.text', 'Cadastro de ponto de doação')

        // Preencho o formulário
        cy.get('input[name="name"]').type('Agro EDY')
        cy.get('input[name="email"]').type('dhz@.com')
        cy.get('input[name="cep"]').type('07661195')
        cy.get('input[type="button"]').click()
        cy.get('input[name="addressNumber"]').type('356')
        cy.get('input[name="addressDetails"]').type('Colinas 2')
        cy.get('img[alt="Gatos"]').click()
        cy.get('button[class="button-register"]').click()
        // Visualizo a mensagem de erro
        cy.get('span[class="alert-error"]').should('have.text', 'Informe um email válido')
    })


    it('Não deve realizar cadastro com CEP inválido', () => {

        // Acesso a home do site
        cy.visit('https://petlov.vercel.app/')
        cy.get('h1').should('have.text', 'Conectando corações, mudando vidas!')

        // Acesso a pagina de cadastro
        cy.get('strong').click()
        cy.get('h1').should('have.text', 'Cadastro de ponto de doação')

        // Preencho o formulário
        cy.get('input[name="name"]').type('Agro EDY')
        cy.get('input[name="email"]').type('dhz@gmail.com')
        cy.get('input[name="cep"]').type('0000')
        cy.get('input[type="button"]').click()
        cy.get('input[name="addressNumber"]').type('356')
        cy.get('input[name="addressDetails"]').type('Colinas 2')
        cy.get('img[alt="Gatos"]').click()
        //cy.get('button[class="button-register"]').click()

        // Visualizo a mensagem de erro
        cy.get('span[class="alert-error"]').should('have.text', 'Informe um CEP válido')

    })

    it('Não deve realizar cadastro com numero de endereço inválido', () => {

        // Acesso a home do site
        cy.visit('https://petlov.vercel.app/')
        cy.get('h1').should('have.text', 'Conectando corações, mudando vidas!')

        // Acesso a pagina de cadastro
        cy.get('strong').click()
        cy.get('h1').should('have.text', 'Cadastro de ponto de doação')

        // Preencho o formulário
        cy.get('input[name="name"]').type('Agro EDY')
        cy.get('input[name="email"]').type('dhz@gmail.com')
        cy.get('input[name="cep"]').type('07661195')
        cy.get('input[type="button"]').click()
        cy.get('input[name="addressNumber"]').type('0')
        cy.get('input[name="addressDetails"]').type('Colinas 2')
        cy.get('img[alt="Gatos"]').click()
        cy.get('button[class="button-register"]').click()

        // Visualizo a mensagem de erro
        cy.get('.alert-error').should('have.text', 'Informe um número maior que zero')

    })

    it('Não deve realizar cadastro com campos em branco', () => {

        // Acesso a home do site
        cy.visit('https://petlov.vercel.app/')
        cy.get('h1').should('have.text', 'Conectando corações, mudando vidas!')

        // Acesso a pagina de cadastro
        cy.get('strong').click()
        cy.get('h1').should('have.text', 'Cadastro de ponto de doação')
        // Clico em cadastrar sem preencher nenhum campo
        cy.get('button[class="button-register"]').click()
        // Valido os erros que serão exibidos
        cy.contains('.alert-error', 'Informe o seu nome completo')
        cy.contains('.alert-error', 'Informe o seu melhor email')
        cy.contains('.alert-error', 'Informe o seu CEP')
        cy.contains('.alert-error', 'Informe um número maior que zero')
        

    })
})