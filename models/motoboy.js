'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Motoboy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Motoboy.init({
    rg: DataTypes.STRING,
    cpf: DataTypes.STRING,
    cnh: DataTypes.STRING,
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    datanascimento: DataTypes.STRING,
    cidade: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Motoboy',
  });
  return Motoboy;
};