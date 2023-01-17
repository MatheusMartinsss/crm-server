'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Clientes.belongsTo(models.User, { foreignKey: 'vendedor_id', as: 'Vendedor' })
    }
  }
  Clientes.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    cpf: DataTypes.STRING,
    vendedor_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};