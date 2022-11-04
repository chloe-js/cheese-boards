// Board model is tested
// Board model has type as a string
// Board model has description as a string
// Board model has rating as a number

const { Board } = require('../models')
const db = require('../db/db')

describe('Testing Board model', () => {
    beforeAll(async () => await db.sync({ force: true }))
    afterAll(async () => await db.sync({ force: true }))

    it('Board model has type as a string, description as a string and rating as a number', async () => {
        const board = await Board.create({ type: 'Aged cheese board', description: 'Assorted Aged cheeses', rating: 10 })

        expect(board.type).toBeTruthy()
        expect(board.description).toBeTruthy()
        expect(board.rating).toBeTruthy()

        expect(board).toEqual(expect.objectContaining({ type: 'Aged cheese board', description: 'Assorted Aged cheeses', rating: 10 }))

        await board.destroy()
    })
})