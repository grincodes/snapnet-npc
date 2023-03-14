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
      'Citizens',
      [
        {
          fullname: 'Lagos',
          address: 'lag address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 1,
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          fullname: 'Ogun',
          address: 'og address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 2,
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },

        {
          fullname: 'Osun',
          address: 'os address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 1,
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          fullname: 'Rivers',
          address: 'riv address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 2,
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },

        {
          fullname: 'Lagos',
          address: 'lag address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 1,
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          fullname: 'Oyo',
          address: 'oyo address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 3,
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },

        {
          fullname: 'Abia',
          address: 'abia address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 4,
          timestamp,
          ...CREATE_UPDATE_TIMESTAMP,
        },
        {
          fullname: 'Ekiti',
          address: 'ekiti address',
          gender: 'male',
          phone: '+2349090604823',
          wardId: 5,
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
