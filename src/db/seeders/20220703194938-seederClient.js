'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clients',[
      {
        name: 'Martin',
        surname: 'Palermo',
        dni:'42647298',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Roman',
        surname: 'Riquelme',
        dni:'55555555',
        createdAt: new Date,
        updatedAt: new Date
      }
    ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
