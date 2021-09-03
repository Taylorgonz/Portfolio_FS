const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Websites = require('./Websites')


class Tech extends Model {};

Tech.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        webId: {
            type: DataTypes.STRING,
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
        modelName: 'tech'
    }
);

module.exports = Tech;