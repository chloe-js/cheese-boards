// Board - User relationship is tested
// Multiple boards can be added to a User

// Board - Cheese relationship is tested
// A Board can have many Cheeses, and a Cheese can be on many Boards
const db = require('../db/db')
const { Cheese, Board, User } = require('../models/index')

describe('Users and Cheese...', () => {

    test('Profile can be assigned', async () => {
        const cheese1 = await Cheese.create({
            title: 'Cheddar',
            description: 'The texture is slightly buttery, moist, and a little melty.'
        })
        const board1 = await Board.create({
            type: 'Mixed cheese board',
            describe: 'Assorted mixed cheeses',
            rating: 6
        })

        await cheese1.addBoard(board1)
        const cheeseBoard = await cheese1.getBoards()
        expect(cheeseBoard[0].id).toEqual(board1.id)
        await cheese1.destroy()
        await board1.destroy()
    })
})

