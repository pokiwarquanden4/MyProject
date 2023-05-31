"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      History.belongsTo(models.User);
      models.User.hasMany(History);
      History.belongsTo(models.Storage);
      models.Storage.hasMany(History);
    }
  }
  History.init(
    {
      sellerId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      number: DataTypes.INTEGER,
      paid: DataTypes.DOUBLE,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
