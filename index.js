// configuração leitura .env
require('dotenv').config();
const express = require('express');

// puxando os dados do database
require('./src/database/index.js');

// rotas
const employeeRoutes = require('./src/routes/employeeRoutes.js');

class App 
{
  constructor()
  {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares()
  {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  routes()
  {
    this.app.use('/employee', employeeRoutes);
  }
}

module.exports = new App().app;