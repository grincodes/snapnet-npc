'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'States',
      [
        {
          name: 'Lagos',
          timestamp: Math.floor(Date.now / 1000),
        },
        {
          name: 'Ogun',
          timestamp: Math.floor(Date.now / 1000),
        },

        {
          name: 'Osun',
          timestamp: Math.floor(Date.now / 1000),
        },
        {
          name: 'Rivers',
          timestamp: Math.floor(Date.now / 1000),
        },

        {
          name: 'Lagos',
          timestamp: Math.floor(Date.now / 1000),
        },
        {
          name: 'Oyo',
          timestamp: Math.floor(Date.now / 1000),
        },

        {
          name: 'Abia',
          timestamp: Math.floor(Date.now / 1000),
        },
        {
          name: 'Ekiti',
          timestamp: Math.floor(Date.now / 1000),
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
