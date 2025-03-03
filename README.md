Automacao-top10-owasp

Descrição

Este repositório contém a automação de testes de segurança baseados no OWASP Top 10 utilizando o Cypress. As vulnerabilidades serão testadas contra o bWAPP, uma aplicação web vulnerável, hospedada em um servidor local utilizando XAMPP.

Tecnologias Utilizadas

Cypress - Para automação de testes

bWAPP - Aplicativo vulnerável para testes

XAMPP - Servidor local para hospedar o bWAPP

Requisitos

Antes de iniciar, certifique-se de ter instalado:

Node.js (versão 14 ou superior)

Cypress (instalação descrita abaixo)

XAMPP

bWAPP configurado no servidor local

Instalação

Clone este repositório:

git clone https://github.com/JoniclerSaldanha01/Automacao-top10-woasp.git
cd Automacao-top10-owasp

Instale as dependências do Cypress:

npm install

Configure e inicie o XAMPP:

Inicie o Apache e o MySQL pelo painel do XAMPP.

Coloque o bWAPP na pasta htdocs do XAMPP.

Acesse http://localhost/bWAPP/login.php para verificar se está rodando.

Executando os Testes

Para rodar os testes no modo interativo:

npx cypress open

Para rodar no modo headless:

npx cypress run

Estrutura do Projeto

Automacao-top10-owasp/
│-- cypress/
│   ├── integration/        # Testes automatizados
│   ├── fixtures/           # Dados para os testes
│   ├── plugins/            # Plugins do Cypress
│   ├── support/            # Comandos customizados
│-- cypress.json            # Configuração do Cypress
│-- package.json            # Dependências do projeto
│-- README.md               # Documentação do projeto

Contribuição

Sinta-se à vontade para contribuir! Abra um Pull Request ou relate um problema na aba Issues.

Licença

Este projeto está licenciado sob a MIT License.

Autor
Jonicler dos Passos


