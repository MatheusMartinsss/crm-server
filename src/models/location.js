'use strict';
const {
    Model, UUID
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
            Location.belongsTo(models.Clientes, { foreignKey: 'cliente_id', as: 'location' })
        }
    }
    Location.init({
        estado: DataTypes.STRING,
        cidade: {
            type: DataTypes.STRING,
            allowNull: true
        },
        uf: DataTypes.STRING,
        cliente_id: {
            allowNull: true,
            type: UUID,
            references: {
                model: 'clientes', key: 'id'
            }
        },

    }, {
        sequelize,
        tableName: 'location',
        modelName: 'Location'
    });
    return Location;
};