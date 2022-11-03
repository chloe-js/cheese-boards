const { Model, DataTypes } = require('sequelize')
const db = require('../db/db')

// one to many

class User extends Model { }

User.init({

    name: {
        type: DataTypes.STRING,
        // primaryKey: true,
        // autoIncrement:true,
    },
    email: {
        type: DataTypes.STRING,
        // allowNull: false,
    },

}, { 
    sequelize: db 
})

module.exports = User