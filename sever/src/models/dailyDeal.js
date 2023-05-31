"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DailyDeal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DailyDeal.belongsTo(models.Storage);
    }
  }
  DailyDeal.init(
    {
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DailyDeal",
    }
  );
  return DailyDeal;
};
