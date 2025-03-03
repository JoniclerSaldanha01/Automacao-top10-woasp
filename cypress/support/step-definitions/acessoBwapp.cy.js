import { Given, When, And, Then, Before, After,} from "cypress-cucumber-preprocessor/steps"
import acessarAplicacao from '../page/acessarApicacao'

Given('que acesso a aplicacao WAPP', () => {
    acessarAplicacao.acessar()
})