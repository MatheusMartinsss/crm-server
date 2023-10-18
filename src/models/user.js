'use strict';
const {
  Model, UUID, UUIDV4
} = require('sequelize');
const { v4 } = require('uuid')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Roles, { foreignKey: 'role_id', as: 'Role' })
      User.hasMany(models.Clientes, { foreignKey: 'vendedor_id', as: 'Clientes' })
      User.hasMany(models.Negociacoes, { foreignKey: 'vendedor_id', as: 'Vendas' })
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING(1000),
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User'
  },);
  User.beforeCreate(user => user.id = v4())
  return User;
};