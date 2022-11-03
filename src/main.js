//$ npm run seeds
//$ npm run main

const { Cheese, Board, User } = require('../models')

async function main() {

    // //one-to-one
    // const borrower1 = await Borrower.findByPk(1)
    // // console.log(borrower1);
    // // console.log((await borrower1.getBook()).toJSON()); 

    // const borrowers = await Borrower.findAll()
    // // console.log(borrowers[2].toJSON());
    // // console.table(borrowers.map((borrower) => borrower.toJSON()));
    // const book1 = await Book.findByPk(2)
    // await book1.setBorrower(borrowers[3])

    // const author1 = await Author.findByPk(5)
    // //one author to many bookS
    // // console.table((await author1.getBooks()).map(b => b.toJSON()))
    // // console.log(`Total books: ${await author1.countBooks()}`);

}

main()