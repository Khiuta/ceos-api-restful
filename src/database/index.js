import Sequelize from 'sequelize';
import databaseConfig from '../config/config.js';
import Employee from '../Models/Employee.js';

const models = [Employee];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
