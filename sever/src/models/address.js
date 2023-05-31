"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.belongsTo(models.User);
      models.User.hasMany(Address);
    }
  }
  Address.init(
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      company: DataTypes.STRING,
      address1: DataTypes.TEXT,
      address2: DataTypes.TEXT,
      city: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
