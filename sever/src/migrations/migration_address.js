"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "address",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        company: {
          type: Sequelize.STRING,
        },
        address1: {
          type: Sequelize.TEXT,
        },
        address2: {
          type: Sequelize.TEXT,
        },
        city: {
          type: Sequelize.STRING,
        },
        country: {
          type: Sequelize.STRING,
        },
        phoneNumber: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        timestamps: true,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("address");
  },
};
