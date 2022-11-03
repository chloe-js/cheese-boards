const { Model, DataTypes } = require('sequelize')
const db = require('../db/db')

// many to many
class Cheese extends Model { }

Cheese.init({

    title: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement:true,
    },
    description: {
        type: DataTypes.STRING,
    },

}, { 
    sequelize: db 
})

module.exports = Cheese