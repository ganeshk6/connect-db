const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db_connection');

const Booking = sequelize.define(
    'bookings', 
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        seatNumber:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
    }
)

module.exports = Booking