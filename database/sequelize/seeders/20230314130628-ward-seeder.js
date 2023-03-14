'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const CREATE_UPDATE_TIMESTAMP = {
      createdAt: '2023-03-06 03:06:53',
      updatedAt: '2023-03-06 03:06:53',
    };
    const timestamp = 50000;
    await queryInterface.bulkInsert(
      'Wards',
      [
        {
          name: 'LagosWard',
          timestamp,
          lgaId: 1,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          name: 'OgunWard',
          timestamp,
          lgaId: 2,
          ...CREATE_UPDATE_TIMESTAMP,
        },

        {
          name: 'OsunWard',
          timestamp,
          lgaId: 3,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          name: 'RiversWard',
          timestamp,
          lgaId: 4,
          ...CREATE_UPDATE_TIMESTAMP,
        },

        {
          name: 'LagosWard',
          timestamp,
          lgaId: 5,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          name: 'OyoWard',
          timestamp,
          lgaId: 6,
          ...CREATE_UPDATE_TIMESTAMP,
        },

        {
          name: 'AbiaWard',
          timestamp,
          lgaId: 7,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          name: 'EkitiWard',
          timestamp,
          lgaId: 8,
          ...CREATE_UPDATE_TIMESTAMP,
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
