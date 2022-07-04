'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movements', [
        {
          description: 'movimiento 1',
          ammount: 100,
          createdAt: new Date(),
          updatedAt: new Date,
          accountId: 2,
        },
      {
        description: 'movimiento 2',
        ammount: 100,
        createdAt: new Date(),
        updatedAt: new Date,
        accountId: 2,
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
