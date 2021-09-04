const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Websites = require('./Websites')


class Features extends Model {};

Features.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        websiteId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Websites,
                key: 'id'
            }
        },

        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'feature'
    }
);

module.exports = Features;