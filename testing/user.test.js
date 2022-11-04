// User model is tested
// User model has name as a string
// User model has email as a string

const { User } = require('../models')
const db = require('../db/db')

describe('Testing User model', () => {
    beforeAll(async () => await db.sync({ force: true }))
    afterAll(async () => await db.sync({ force: true }))

    it('User model name as a string and email as a string', async () => {
        const user = await User.create({ name: 'Jo Smith', email: 'smith@gmail.com' })

        expect(user.name).toBeTruthy()
        expect(user.email).toBeTruthy()

        expect(user).toEqual(expect.objectContaining({ name: 'Jo Smith', email: 'smith@gmail.com' }))

        await user.destroy()
    })
})