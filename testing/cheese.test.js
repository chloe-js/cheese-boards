const { Cheese } = require('../models')
const db = require('../db/db')

describe('Testing Cheese model', () => {
    beforeAll(async () => await db.sync({ force: true }))
    afterAll(async () => await db.sync({ force: true }))

    it('Cheese model has title as a string and description as a string', async () => {
        const cheese = await Cheese.create({ title: 'Brie', description: 'The Queen of Cheeses' })

        expect(cheese.title).toBeTruthy()
        expect(cheese.description).toBeTruthy()

        expect(cheese).toEqual(expect.objectContaining({ title: 'Brie', description: 'The Queen of Cheeses' }))

        await cheese.destroy()
    })
})