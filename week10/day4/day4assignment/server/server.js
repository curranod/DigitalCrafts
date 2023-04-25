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
    const bookImageURL = req.body.bookImageURL

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

app.delete("/api/books/:bookid", (req, res) => {
    const id = req.params.bookid;
    const bookIndex = Book.findOneAndDelete({_id: id})
      res.send(bookIndex)
    });

  app.post("/api/post/update", (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const country = req.body.country;
    const imgsrc = req.body.imgsrc;
  
    const book = {
      id: books.length + 1,
      title: title,
      author: author,
      country: country,
      imgsrc: imgsrc,
    };
  });

app.listen(8080, () => {
    console.log('server running ')
})