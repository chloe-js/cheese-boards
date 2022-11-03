const { Cheese, Board, User } = require('../models')
const db = require('./db')

async function seed() {

    await db.sync({
        force: true
    })

    await Cheese.bulkCreate([
        {
            title: "Tom",
            description: "xxx"
        },
        {
            title: "Tom",
            description: "xxx"
        }

    ])

    await Board.bulkCreate([
        {
            type: "Albertus",
            description: "Albertus",
            rating: 00
        },
        {
            type: "Albertus",
            description: "Albertus",
            rating: 00
        },

    ])

    await User.bulkCreate([
        {
            name: "Leibniz",
            email: "zzzz @gmail.com",
        },
        {
            name: "Leibniz",
            email: "zzzzz @yahoo.com",
        },
        {
            name: "Leibniz",
            email: "zzzzz @yahoo.com",
        },
        // {
        //     title: "Heidegger and Theology",
        //     BorrowerId: 1
        //     AuthorId: 7
        // }

    ])

}

seed()