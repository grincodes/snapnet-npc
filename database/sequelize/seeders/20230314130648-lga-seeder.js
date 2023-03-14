'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Lgas',
      [
        {
          name: 'LagosLga',
          timestamp: Math.floor(Date.now / 1000),
          stateId: 1,
        },
        {
          name: 'OgunLga',
          timestamp: Math.floor(Date.now / 1000),
          stateId: 2,
        },

        {
          name: 'OsunLga',
          timestamp: Math.floor(Date.now / 1000),
          stateId: 3,
        },
        {
          name: 'RiversLga',
          timestamp: Math.floor(Date.now / 1000),
          stateId: 4,
        },

        {
          name: 'LagosLga',
          timestamp: Math.floor(Date.now / 1000),
          stateId: 5,
        },
        {
          name: 'OyoLga',
          timestamp: Math.floor(Date.now / 1000),
          stateId: 6,
        },

        {
          name: 'AbiaLga',
          timestamp: Math.floor(Date.now / 1000),
          stateId: 7,
        },
        {
          name: 'EkitiLga',
          timestamp: Math.floor(Date.now / 1000),
          stateId: 8,
        },
        // add more data here
      ],
      {},
    );
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
