'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Citizens',
      [
        {
          fullname: 'Lagos',
          address: 'lag address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 1,
          timestamp: Math.floor(Date.now / 1000),
        },
        {
          fullname: 'Ogun',
          address: 'og address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 2,
          timestamp: Math.floor(Date.now / 1000),
        },

        {
          fullname: 'Osun',
          address: 'os address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 1,
          timestamp: Math.floor(Date.now / 1000),
        },
        {
          fullname: 'Rivers',
          address: 'riv address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 2,
          timestamp: Math.floor(Date.now / 1000),
        },

        {
          fullname: 'Lagos',
          address: 'lag address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 1,
          timestamp: Math.floor(Date.now / 1000),
        },
        {
          fullname: 'Oyo',
          address: 'oyo address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 3,
          timestamp: Math.floor(Date.now / 1000),
        },

        {
          fullname: 'Abia',
          address: 'abia address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 4,
          timestamp: Math.floor(Date.now / 1000),
        },
        {
          fullname: 'Ekiti',
          address: 'ekiti address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 5,
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
