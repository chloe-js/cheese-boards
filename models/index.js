const Cheese = require('./cheese.model')
const Board = require('./board.model')
const User = require('./user.model')

//one-to many  
User.hasMany(Board) 
Board.belongsTo(User)

//many-to-many
Board.belongsToMany(Cheese, {through: 'Board_Cheese'}) 
Cheese.belongsToMany(Board, {through: 'Board_Cheese'})

module.exports = {
    Cheese,
    Board,
    User
}