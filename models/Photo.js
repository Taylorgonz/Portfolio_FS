const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Photo extends Model {};

Photo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        
        url: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        category: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'photos'
    }
);

module.exports = Photo;