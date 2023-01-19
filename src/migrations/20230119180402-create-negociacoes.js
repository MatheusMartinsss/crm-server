'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('negociacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.DECIMAL(10, 2)
      },
      vendedor_id: {
        type: Sequelize.UUID,
        reference: {
          model: 'users', key: 'id'
        }
      },
      cliente_id: {
        type: Sequelize.UUID,
        reference: {
          model: 'clientes', key: id
        }
      },
      closeExpect: {
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('negociacoes');
  }
};