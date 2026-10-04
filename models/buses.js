const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db_connection');

const Bus = sequelize.define(
    'buses', 
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        busNumber:{
            type:DataTypes.STRING,
            allowNull: false
        },
        totalSeats:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        availableSeats:{
            type:DataTypes.INTEGER,
            allowNull: true
        }
    }
)

module.exports = Bus