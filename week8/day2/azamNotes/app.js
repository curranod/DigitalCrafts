const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
const mongoose = require('mongoose')
const Book = require('./schemas/book')

app.use(express.urlencoded())

// setting up mustache as a templating engine 
app.engine('mustache', mustacheExpress())
// the pages are located in the views directory
app.set('views', './views')
// extension for all the pages 
app.set('view engine', 'mustache')

// connect to MongoDB database 
mongoose.connect('mongodb+srv://azamsharp:sxn6nSxVxo1Hqn4q@cluster0.1prjptw.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('MongoDb is connected.')
}).catch((error) => {
    console.log(error)
})


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/create-book', async (req, res) => {

    const name = req.body.name 
    const isbn = req.body.isbn 
    const author = req.body.author 
    const isPublished = req.body.isPublished

    // create an instance of Book model 
    const book = new Book({
        name: name, 
        isbn: isbn, 
        author: author, 
        isPublished: isPublished
    })

    // save the book to the database 
    const savedBook = await book.save()
    res.redirect('/')
})

app.listen(8080,() => {
    console.log("Server is running...")
  })
