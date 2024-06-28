import RegisterPage from '../pages/register.page'
import HomePage from '../pages/home.page'

describe('Cadastro', () => {
    const registro = new RegisterPage()
    const home = new HomePage()

    it('Cadastrar ponto de doação com sucesso', () => {
        home.acessoAHomeDoSite()
        registro.acessoAPaginaDeCadastro()
        registro.preenchoOFormulario('Danilo', 'dhz@gmail.com', '07661195', '356', 'Colinas 2')
        registro.envioOFormulario()
        registro.efetuoOCadastro()
    })

    it('Não deve realizar cadastro com e-mail inválido', () => {
        home.acessoAHomeDoSite()
        registro.acessoAPaginaDeCadastro()
        registro.preenchoOFormulario('Danilo', 'dhz@.com', '07661195', '356', 'Colinas 2')
        registro.envioOFormulario()
        registro.validoOErro('Informe um email válido')
    })

    it('Não deve realizar cadastro com CEP inválido', () => {
        home.acessoAHomeDoSite()
        registro.acessoAPaginaDeCadastro()
        registro.preenchoOFormulario('Danilo', 'dhz@gmail.com', '0000', '356', 'Colinas 2')
        registro.validoOErro('Informe um CEP válido')
    })

    it('Não deve realizar cadastro com numero de endereço inválido', () => {
        home.acessoAHomeDoSite()
        registro.acessoAPaginaDeCadastro()
        registro.preenchoOFormulario('Danilo', 'dhz@gmail.com', '07661195', '0', 'Colinas 2')
        registro.envioOFormulario()
        registro.validoOErro('Informe um número maior que zero')

    })

    it('Não deve realizar cadastro com campos em branco', () => {
        home.acessoAHomeDoSite()
        registro.acessoAPaginaDeCadastro()
        registro.envioOFormulario()

        const mensagensDeErro = [
            'Informe o seu nome completo',
            'Informe o seu melhor email',
            'Informe o seu CEP',
            'Informe um número maior que zero'
        ]

        mensagensDeErro.forEach(mensagem => {
            registro.validoOErro(mensagem)
        })
    })
})