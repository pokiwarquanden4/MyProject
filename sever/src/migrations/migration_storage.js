"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Storage",
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
        productName: {
          type: Sequelize.STRING,
        },
        price: {
          type: Sequelize.DOUBLE,
        },
        shipping: {
          type: Sequelize.INTEGER,
        },
        sold: {
          type: Sequelize.INTEGER,
        },
        rate: {
          type: Sequelize.INTEGER,
        },
        description: {
          type: Sequelize.TEXT,
        },
        detailDescription: {
          type: Sequelize.TEXT,
        },
        number: {
          type: Sequelize.INTEGER,
        },
        saleOff: {
          type: Sequelize.INTEGER,
        },
        imgURL: {
          type: Sequelize.STRING,
        },
        listImgURL: {
          type: Sequelize.STRING,
        },
        category: {
          type: Sequelize.STRING,
        },
      },
      {
        timestamps: true,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Storage");
  },
};
