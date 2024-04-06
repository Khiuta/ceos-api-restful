/**
 * @type {import('sequelize-cli').Migration}
 */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('employees', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    salary: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    time_employed: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    occupation: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('employees'),
};
