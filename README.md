# Pizzariamania Backend (Autenticação)

Este é o backend de autenticação para o projeto Pizzariamania, uma aplicação fictícia de uma pizzaria. O objetivo deste backend é lidar com a autenticação de usuários, incluindo registro, login e controle de sessões.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize
- Sequelize CLI
- JSON Web Tokens (JWT)
- bcrypt.js

## Funcionalidades

- **Registro de Usuários:** Permite que os usuários se registrem na plataforma, fornecendo um nome de usuário, endereço de e-mail e senha.
- **Autenticação de Usuários:** Fornece endpoints para que os usuários possam fazer login na plataforma, gerando tokens de acesso JWT válidos.
- **Proteção de Rotas:** Utiliza tokens JWT para proteger rotas que exigem autenticação.
- **Validação de Credenciais:** Verifica se as credenciais fornecidas pelo usuário são válidas durante o processo de autenticação.

## Configuração

### Pré-requisitos

- Node.js e npm instalados globalmente.
- Banco de dados PostgreSQL configurado.

### Passos para instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/RuanDevz/Backendpizzaria.git
2. Navegue até o diretório do projeto:
   cd Backendpizzaria
3. Instale as dependências:
   npm install
4. Configure as variáveis de ambiente:
Renomeie o arquivo .env.example para .env.
Preencha as variáveis de ambiente no arquivo .env, especialmente as relacionadas ao banco de dados e à geração de tokens JWT.
5. Execute as migrações do banco de dados:
   npx sequelize-cli db:migrate

6. Inicie o servidor:
   npm start  
