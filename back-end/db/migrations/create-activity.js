'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      commissionName: {
        type: Sequelize.STRING
      },
      manufacturingName: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      notes: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('activities');
  }
};