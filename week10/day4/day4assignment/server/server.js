const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

const Book = require('./schemas/Book')

mongoose.connect('mongodb+srv://curranod840:ZcccWLnhU36YllIL@cluster2.sah4qux.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
}).catch((error) => {
    console.log(error)
})

app.post('/api/add-book', async (req,res) => {
    const bookTitle = req.body.bookTitle
    const bookGenre = req.body.bookGenre
    const bookPublisher = req.body.bookPublisher
    const bookYear = req.body.bookYear
    const bookImageURL = req.body.bookImageUrl

    const book = new Book({
        bookTitle:bookTitle,
        bookGenre:bookGenre,
        bookPublisher:bookPublisher,
        bookYear:bookYear,
        bookImageURL:bookImageURL
    })
    await book.save()
    res.json({"message": "success"})
})

app.get('/api/books', async (req, res) => {
    const books = await Book.find({})
    res.json(books)
})

app.post('/api/books/:_id', async (req,res) => {
    const id =req.params._id

    const updateBook = {
        bookTitle: req.body.bookTitle,
        bookGenre: req.body.bookGenre,
        bookPublisher: req.body.bookPublisher,
        bookYear: req.body.bookYear,
        bookImageURL: req.body.bookImageURL,
    }

    const updated = await Book.findByIdAndUpdate(id, updateBook)
    res.json(updated)
})

app.delete("/api/books/:bookid", async (req, res) => {
    const id = req.params.bookid;
    await Book.findOneAndDelete(id)
      res.redirect("/api/books")
    });

  

app.listen(8080, () => {
    console.log('server running ')
})