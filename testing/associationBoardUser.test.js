// Board - User relationship is tested
// Multiple boards can be added to a User

// Board - Cheese relationship is tested
// A Board can have many Cheeses, and a Cheese can be on many Boards
const db = require('../db/db')
const { Cheese, Board, User } = require('../models/index')

describe('Users and boards...', () => {

    test('Profile can be assigned', async () => {
        const user1 = await User.create({
            name: 'name1',
            email: 'email1@email.com'
        })
        const board1 = await Board.create({
            type: 'Aged cheese board',
            describe: 'Assorted soft cheeses',
            rating: 3
        })

        await user1.addBoard(board1)
        const userBoard = await user1.getBoards()
        expect(userBoard[0].id).toEqual(board1.id)
        await user1.destroy()
        await board1.destroy()
    })
})

