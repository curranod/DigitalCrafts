const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookTitle: String,
    bookGenre: String,
    bookPublisher: String,
    bookYear: String,
    bookImageURL: String
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book