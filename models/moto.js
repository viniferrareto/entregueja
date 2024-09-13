'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Moto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Moto.init({
    placamoto: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    ano: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Moto',
  });
  return Moto;0
};