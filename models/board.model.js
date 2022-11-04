const { Model, DataTypes } = require('sequelize')
const db = require('../db/db')

// many to many
class Board extends Model { }

Board.init({
    // auto increment  1-5
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    rating: {
        type: DataTypes.NUMBER,
    },
    cheeseId: {
        type: DataTypes.INTEGER,
    },
    // userId: {
    //     type: DataTypes.INTEGER,
    // },
}, { 
    sequelize: db 
})

module.exports = Board