"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Seller",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        sellerId: {
          type: Sequelize.INTEGER,
        },
        totalMoney: {
          type: Sequelize.DOUBLE,
        },
        ranking: {
          type: Sequelize.INTEGER,
        },
        permit: {
          type: Sequelize.BOOLEAN,
        },
      },
      {
        timestamps: true,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Seller");
  },
};
