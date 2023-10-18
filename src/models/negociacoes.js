'use strict';
const {
  Model, UUID
} = require('sequelize');
const { v4 } = require('uuid')
module.exports = (sequelize, DataTypes) => {
  class Negociacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Negociacoes.belongsTo(models.User, { foreignKey: 'vendedor_id', as: "Vendedor" })
      Negociacoes.belongsTo(models.Clientes, { foreignKey: 'cliente_id', as: "Cliente" })
      Negociacoes.belongsTo(models.Groups, { foreignKey: 'group_id', as: 'Group' })
      Negociacoes.belongsTo(models.Tags, { foreignKey: 'tag_id', as: 'Tag' })
    }
  }
  Negociacoes.init({
    id: {
      type: UUID,
      primaryKey: true,

    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    value: DataTypes.DECIMAL(10, 2),
    vendedor_id: DataTypes.UUID,
    cliente_id: DataTypes.UUID,
    group_id: DataTypes.INTEGER,
    closeExpect: DataTypes.DATE,
    tag_id: DataTypes.INTEGER,
    finished: DataTypes.BOOLEAN,
    prioridade: DataTypes.ENUM(['critica', 'alta', 'media', 'baixa', 'minima'])
  }, {
    sequelize,
    tableName: 'negociacoes',
    modelName: 'Negociacoes'
  });
  Negociacoes.beforeCreate(user => user.id = v4())
  return Negociacoes;
};