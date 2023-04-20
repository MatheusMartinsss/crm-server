'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    Promise.all([
      await queryInterface.addColumn('clientes', 'empresa_tamanho', {
        type: Sequelize.ENUM('pequena', 'media', 'grande', ''),
        defaultValue: ''
      }),
      await queryInterface.addColumn('clientes', 'pessoa_tipo', {
        type: Sequelize.ENUM('fisica', 'juridica'),
        defaultValue: 'fisica'
      })
    ])
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    Promise.all([
      await queryInterface.removeColumn('clientes', 'empresa_tamanho'),
      await queryInterface.removeColumn('clientes', 'pessoa_tipo')
    ])
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
