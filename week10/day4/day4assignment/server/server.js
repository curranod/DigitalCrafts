const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const authenticate = require('./middlewares/authMiddleware')
const jwt = require('jsonwebtoken');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

const Book = require('./schemas/Book')
const User = require('./schemas/User')

mongoose.connect('mongodb+srv://curranod840:ZcccWLnhU36YllIL@cluster2.sah4qux.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
  }).catch((error) => {
    console.log(error)
  })

  
  // app.post('/api/login', (req, res) => {
    //   const { username, password } = req.body
    
    //   User.findOne({ username })
    //     .then(user => {
      //       if (!user) {
        //         return res.status(401).json({ success: false, message: 'Incorrect username or password' })
        //       }
        
        //       bcrypt.compare(password, user.password)
        //         .then(result => {
          //           if (!result) {
            //             return res.status(401).json({ success: false, message: 'Incorrect username or password' })
            //           }
            
            //           const token = jwt.sign({ username }, 'SECRETKEY')
            //           res.json({ success: true, token })
            //         })
            //         .catch(err => {
              //           return res.status(500).json({ success: false, message: 'Internal server error' })
              //         })
//     })
//     .catch(err => {
//       return res.status(500).json({ success: false, message: 'Internal server error' })
//     })
// })

app.post('/api/login', async (req, res) => {
      const username = req.body.username
      const password = req.body.password
  
      const user = await User.findOne({username: username, password: password})
      
  
    if(user) {
        const token = jwt.sign({username: user.username}, 'SECRETKEY')
        res.json({success: true, token: token})
    } else {
        res.json({success: false, message: 'unable to authenticate'})
    }
})

app.post('/api/register', async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const user = new User({
    username: username,
    password: password
  })
  if (user) {
    await user.save()
    const token = jwt.sign({ username: user.username }, 'SECRETKEY')
    res.json({ token: token, success: true })
  } else {
    res.json({ success: false, message: "user already exists" })
  }
})

app.get('/api/books', authenticate, async (req, res) => {
  const books = await Book.find({})
  res.json(books)
})

app.post('/api/add-book', async (req, res) => {
  const bookTitle = req.body.bookTitle
  const bookGenre = req.body.bookGenre
  const bookPublisher = req.body.bookPublisher
  const bookYear = req.body.bookYear
  const bookImageURL = req.body.bookImageUrl

  const book = new Book({
    bookTitle: bookTitle,
    bookGenre: bookGenre,
    bookPublisher: bookPublisher,
    bookYear: bookYear,
    bookImageURL: bookImageURL
  })
  await book.save()
  res.json({ "message": "success" })
})

app.post('/api/books/:_id', async (req, res) => {
  const id = req.params._id

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

// app.post('/api/login', (req, res) => {
//   const { username, password } = req.body

//   User.findOne({ username })
//     .then(user => {
//       if (!user) {
//         return res.status(401).json({ success: false, message: 'Incorrect username or password' })
//       }

//       bcrypt.compare(password, user.password)
//         .then(result => {
//           if (!result) {
//             return res.status(401).json({ success: false, message: 'Incorrect username or password' })
//           }

//           const token = jwt.sign({ username }, 'SECRETKEY')
//           res.json({ success: true, token })
//         })
//         .catch(err => {
//           return res.status(500).json({ success: false, message: 'Internal server error' })
//         })
//     })
//     .catch(err => {
//       return res.status(500).json({ success: false, message: 'Internal server error' })
//     })
// })



app.listen(8080, () => {
  console.log('server running ')
})