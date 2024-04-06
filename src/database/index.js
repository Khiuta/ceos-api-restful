const Sequelize = require('sequelize');
const databaseConfig = require('../../config/config.js');
const Employee = require('../Models/Employee.js');

const models = [Employee];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
