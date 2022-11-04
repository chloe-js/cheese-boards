const { Cheese, Board, User } = require('../models')
// dont use db in main // dont need it to create or drop tables// call it is you need it
// cheese_board is empty because have not created explicit connection

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

    // //MANY to MANY
    // let books = await Book.findAll()//revcive all books in a list
    // console.log(books);// large array of objects every book is in an object dont need data values = better with JSON
    // console.table(books.map(b => b.toJSON()));// shows in a table , much easier to see, shows borrower id and author id (connection)// using join table to show this

    // const quotes = await Quote.findAll()
    // await books[0].addQuote(quotes[0]) // addQuote is a method created from the relationship
    // await books[0].addQuote(quotes[1]) // this will create the relationship in book_quotes in the join table// contains the relationship!

    // books = await Book.finAll()
    // console.table((await books[0].getQuotes()).map(q => q.toJASON())); // from the first book I want all the qupotes
    // // this creates a new table from the THROUGH TABLE
    // // junction table book_quote = getQuotes



    //MANY to MANY
    // let cheeses = await Cheese.findAll()
    // // console.log(cheeses);// large array of objects every book is in an object dont need data values = better with JSON
    // // console.table(cheeses.map(c => c.toJSON()))

    // let boards = await Board.findAll()
    // await cheeses[0].addBoard(boards[0]) // addQuote is a method created from the relationship
    // await cheeses[0].addBoard(boards[1])

    // books = await Book.finAll()
    // console.table((await books[0].getBoard()).map(q => q.toJASON())); 
}

main()