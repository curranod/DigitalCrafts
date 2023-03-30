const express = require('express')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const session = require('express-session')

const app = express()


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

let users =[
  {username: "johndoe", password: "password"},
  {username: "marydoe", password: "password"}
]
app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/home',(req,res) => {
  res.render('home',{username: req.session.username})
})

app.get('/orders',(req,res) => {
    res.render('orders',{username: req.session.username})
})

app.post('/login',(req,res) => {

  let username = req.body.username
  let password = req.body.password

  let persistedUser = users.find((user) => {
    return user.username == username && user.password == password
  })

  if(persistedUser) {
    if(req.session){
        req.session.username = persistedUser.username
        res.redirect('/home')
    }

  } else {
    res.render('login',{message: 'Invalid Credentials!!'})
  }

})

app.get('/login',(req,res) => {
  res.render('login')
})

app.get('/',(req,res) => {
  res.render('index')
})

app.listen(3000,() => {
  console.log("Server is running...")
})