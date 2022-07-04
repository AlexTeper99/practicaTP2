'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movement.belongsTo(models.Account)
    }
  }
  Movement.init({
    id: {
      allowNull: false,
      type:DataTypes.INTEGER(16),
      primaryKey: true,
      autoIncrement: true
    },
    description: DataTypes.STRING(100),
    ammount: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    accountId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movement',
    tableName: 'movements'
  });
  return Movement;
};