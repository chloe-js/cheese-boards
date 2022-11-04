const Cheese = require('./cheese.model')
const Board = require('./board.model')
const User = require('./user.model')

//one-to many  
User.hasMany(Board) 
Board.belongsTo(User)
// target belongs to the source . boards belongs to the users 
// foreign key in the Boards TABLE! auto added // not made in models yet // user id
// but also will have cheese id

//many-to-many
Board.belongsToMany(Cheese, {through: 'Board_Cheese'}) // creates new table
Cheese.belongsToMany(Board, {through: 'Board_Cheese'})

module.exports = { Cheese, Board, User }