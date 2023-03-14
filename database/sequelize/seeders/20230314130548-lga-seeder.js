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
      'Lgas',
      [
        {
          name: 'LagosLga',
          timestamp,
          stateId: 1,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          name: 'OgunLga',
          timestamp,
          stateId: 2,
          ...CREATE_UPDATE_TIMESTAMP,
        },

        {
          name: 'OsunLga',
          timestamp,
          stateId: 3,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          name: 'RiversLga',
          timestamp,
          stateId: 4,
          ...CREATE_UPDATE_TIMESTAMP,
        },

        {
          name: 'LagosLga',
          timestamp,
          stateId: 5,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          name: 'OyoLga',
          timestamp,
          stateId: 6,
          ...CREATE_UPDATE_TIMESTAMP,
        },

        {
          name: 'AbiaLga',
          timestamp,
          stateId: 7,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          name: 'EkitiLga',
          timestamp,
          stateId: 8,
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
