const { Model, DataTypes } = require('sequelize')
const db = require('../db/db')

// many to many
class Board extends Model { }

Board.init({

    type: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement:true,
    },
    description: {
        type: DataTypes.STRING,
    },
    rating: {
        type: DataTypes.NUMBER,
    }


}, { 
    sequelize: db 
})

module.exports = Board