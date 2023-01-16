'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('users', "role", {
        type: Sequelize.STRING,
        reference: {
          model: 'roles', key: 'name'
        }
      }),
      queryInterface.addColumn('users', 'token', {
        type: Sequelize.STRING(1000)
      })
    ])

  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('users', "role"),
      queryInterface.removeColumn('users', "token")
    ])
  }
};
