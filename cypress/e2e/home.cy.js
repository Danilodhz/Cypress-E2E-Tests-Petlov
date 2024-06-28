import HomePage from '../pages/home.page'

describe('Home', () => {
  it('Visitando a home do site', () => {
    const home = new HomePage() 
    home.acessoAHomeDoSite()
  })
})