const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); // Importação do Pool do pg
const db = require('./models');
const RouterUser = require('./routes/User');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do pool do PostgrSQL
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Testar conexão com o PostgreSQL
pool.connect((err, client, done) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados PostgreSQL:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados PostgreSQL');
  done();
});

// Testar conexão com o Sequelize e sincronizar modelos
db.sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados Sequelize estabelecida com sucesso.');
    return db.sequelize.sync(); // Sincroniza os modelos com o banco de dados
  })
  .then(() => {
    // Inicia o servidor após a sincronização
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}...`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados Sequelize:', err);
  });

// Rotas
app.use('/user', RouterUser);