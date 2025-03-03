const User = '#login'
const Pass = '#password'
const login = 'button'

class aplicacao{

    acessar(){
        cy.visit('http://localhost/bwapp/bWAPP/login.php')
    }

    login(){
        cy.get(User).type(Cypress.env('username'))
        cy.get(Pass).type(Cypress.env('password'))
        cy.get(login).click()
    }

}

export default new aplicacao()