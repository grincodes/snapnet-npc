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
      'States',
      [
        {
          name: 'Lagos',
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          name: 'Ogun',
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },

        {
          name: 'Osun',
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          name: 'Rivers',
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },

        {
          name: 'Lagos',
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          name: 'Oyo',
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },

        {
          name: 'Abia',
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          name: 'Ekiti',
          timestamp,
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
