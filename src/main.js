const { Cheese, Board, User } = require('../models')

async function main() {
    // EAGER LOADING
    const cheese = await Cheese.findByPk(1, {
        include: Board
    })
    console.log(cheese.toJSON());
}

main()