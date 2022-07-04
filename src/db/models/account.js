'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.belongsTo(models.Client)
      Account.hasMany(models.Movement)
    }
  }
  Account.init({
    id: {
      allowNull: false,
      type:DataTypes.INTEGER(16),
      primaryKey: true,
      autoIncrement: true
    },
    address: {
      allowNull: false,
      type:DataTypes.INTEGER(16),
      unique: true
    },
    balance: DataTypes.INTEGER,
    clientId:{ type: DataTypes.INTEGER, allowNull: false},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Account',
    tableName: 'accounts'
  });
  return Account;
};