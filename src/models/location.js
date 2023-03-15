'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Location extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Location.belongsTo(models.Clientes, { foreignKey: 'cliente_id', as: "Cliente" })
        }
    }
    Location.init({
        estado: DataTypes.STRING,
        cidade: DataTypes.STRING,
        cliente_id: DataTypes.UUID,

    }, {
        sequelize,
        tableName: 'location',
        modelName: 'Location'
    });
    return Location;
};