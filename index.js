import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
import './database/index.js';

import employeeRoutes from './routes/employeeRoutes.js';

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

export default new App().app;