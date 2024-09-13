'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cliente.init({
    rg: DataTypes.STRING,
    cpf: DataTypes.STRING,
    senha: DataTypes.STRING,
    email: DataTypes.STRING,
    cidade: DataTypes.STRING,
    endereco: DataTypes.STRING,
    nomecompleto: DataTypes.STRING,
    cnpj: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};