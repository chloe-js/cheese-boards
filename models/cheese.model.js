const { Model, DataTypes } = require('sequelize')
const db = require('../db/db')

// many to many
class Cheese extends Model { }

Cheese.init({
    // auto increment  1-20
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    boardId: {
        type: DataTypes.INTEGER,
    },
}, { 
    sequelize: db 
})

module.exports = Cheese