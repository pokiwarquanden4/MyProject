"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Seller.belongsTo(models.User);
    }
  }
  Seller.init(
    {
      sellerId: DataTypes.INTEGER,
      totalMoney: DataTypes.DOUBLE,
      ranking: DataTypes.INTEGER,
      permit: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Seller",
    }
  );
  return Seller;
};
