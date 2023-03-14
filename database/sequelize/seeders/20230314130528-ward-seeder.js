'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Wards',
      [
        {
          name: 'LagosWard',
          timestamp: Math.floor(Date.now / 1000),
          lgaId: 1,
        },
        {
          name: 'OgunWard',
          timestamp: Math.floor(Date.now / 1000),
          lgaId: 2,
        },

        {
          name: 'OsunWard',
          timestamp: Math.floor(Date.now / 1000),
          lgaId: 3,
        },
        {
          name: 'RiversWard',
          timestamp: Math.floor(Date.now / 1000),
          lgaId: 4,
        },

        {
          name: 'LagosWard',
          timestamp: Math.floor(Date.now / 1000),
          lgaId: 5,
        },
        {
          name: 'OyoWard',
          timestamp: Math.floor(Date.now / 1000),
          lgaId: 6,
        },

        {
          name: 'AbiaWard',
          timestamp: Math.floor(Date.now / 1000),
          lgaId: 7,
        },
        {
          name: 'EkitiWard',
          timestamp: Math.floor(Date.now / 1000),
          lgaId: 8,
        },
        // add more data here
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
