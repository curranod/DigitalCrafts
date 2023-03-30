
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const tripsRouter = require('./routes/trips')
// SESSION 
const session = require('express-session')

// setting up mustache as a templating engine 
app.engine('mustache', mustacheExpress())
// the pages are located in the views directory
app.set('views', './views')
// extension for all the pages 
app.set('view engine', 'mustache')

let users = [
    {username: 'johndoe', password: 'password'}, 
    {username: 'marydoe', password: 'password'}
]

// This helps Express to parse form submitted values 
// MIDDLEWARE 
app.use(express.urlencoded())

// session middleware
// DON'T PUT SENSITIVE INFORMATION IN SESSION 
// THIS INCLUDES PASSWORD, CC, SSN, PASSPORT, BANK ACCOUNT NUMBER
app.use(session({
    secret: 'THISCANBEANYTHING', 
    saveUnitialized: false, 
}))

// MIDDLEWARE 
app.use('/trips', authenticationMiddleware, tripsRouter)

/*
function logMiddleware(req, res, next) {
    console.log('[LOG MIDDLEWARE]')
     // continue with the original request 
    next()
} */

// This will allow the logMiddleware function to execute on each request
//app.use(logMiddleware)
app.get('/login', (req, res) => {
    res.render('login')
})

// AUTHENTICATION MIDDLEWARE 
function authenticationMiddleware(req, res, next) {

    if(req.session) {
        if(req.session.username) {
            // continue with the original request 
            next() 
        } else {
            res.redirect('/login')
        }
    } else {
        res.redirect('/login')
    }

}


// protected route 
app.get('/profile', authenticationMiddleware, (req, res) => {
   res.send('PROFILE')
})

// protected route 
app.get('/my-accounts', authenticationMiddleware, (req, res) => {
  res.send('MY ACCOUNTS')
})

app.post('/login', (req, res) => {

    console.log('LOGIN')
    const username = req.body.username 
    const password = req.body.password 

    // find function is going to return a single object
    const user = users.find(user => user.username = username && user.password == password)

    if(user) {
        // we can put something in the session 
        if(req.session) {
            req.session.username = username 
        }
        res.render('dashboard')
    } else {
        // username or password is incorrect 
        res.render('login', {errorMessage: 'Username or password is incorrect'})
    }

})

app.get('/page1', (req, res) => {
    
     // if session is initialized 
    if(req.session) {
        req.session.catName = 'My Cat Name'
    }
    
    res.render('index')
})

app.get('/page2', (req, res) => {
    
    console.log(req.session.catName)
    res.render('index')
})

app.use(function(req, res, next) {                                            

    // this middleware will write username = "Joh Doe" in request headers. 
    console.log(req.headers)

    console.log('[LOG MIDDLEWARE]')
    // continue with the original request 
   next()
})

app.get('/', (req, res) => {

    // print out the headers 
    console.log(req.headers)
    // create an object called user which consists of a name property 
    const user = {
        name: 'Curran'
    }

    res.render('index', user)
})

app.listen(8080, () => {
    console.log('Server is Running')
})

