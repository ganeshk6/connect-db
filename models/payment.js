const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db_connection');

const Payment = sequelize.define(
    'payments', 
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        amountPaid:{
            type:DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        paymentStatus:{
            type:DataTypes.STRING,
            allowNull:true
        }
    }
)

module.exports = Payment