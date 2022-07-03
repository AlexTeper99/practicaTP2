'use strict';

const { randNumber } = require('@ngneat/falso')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('accounts', [
        {
         address: 11111111,
         balance: 10000,
         clientId: 1,
         createdAt: new Date(),
         updatedAt: new Date()
        },
      {
        address: 2222222,
        balance: 10000,
        clientId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('accounts', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
