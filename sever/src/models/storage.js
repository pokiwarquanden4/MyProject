"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Storage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Storage.belongsTo(models.User);
      models.User.hasMany(Storage);
    }
  }
  Storage.init(
    {
      sellerId: DataTypes.INTEGER,
      productName: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      shipping: DataTypes.INTEGER,
      sold: DataTypes.INTEGER,
      rate: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      detailDescription: DataTypes.TEXT,
      number: DataTypes.INTEGER,
      saleOff: DataTypes.INTEGER,
      imgURL: DataTypes.STRING,
      listImgURL: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Storage",
    }
  );
  return Storage;
};
