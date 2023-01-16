'use strict';
const uuid = require('uuid')
const { encrypt } = require('../utils/helpers/encrypter')
module.exports = {
  async up(queryInterface, Sequelize) {
    const password = await encrypt('admin')
    return queryInterface.bulkInsert('users', [{
      id: uuid.v4(),
      name: 'admin',
      role: 'admin',
      password: password,
      email: 'admin@admin.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};