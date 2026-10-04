const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db_connection');

const User = sequelize.define(
    'users', 
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            allowNull: true
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull: true
        }
    }
)

module.exports = User