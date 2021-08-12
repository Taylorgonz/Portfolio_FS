const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Websites extends Model {};

Websites.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        github_url: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        
    
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'websites'
    }
);

module.exports = Websites;