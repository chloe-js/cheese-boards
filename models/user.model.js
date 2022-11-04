const { Model, DataTypes } = require('sequelize')
const db = require('../db/db')

// one to many

class User extends Model { }

User.init({
    // auto increment  1-7
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    boardId: {
        type: DataTypes.INTEGER,
    },

}, { sequelize: db })

module.exports = User