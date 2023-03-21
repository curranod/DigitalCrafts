const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const pgp = require('pg-promise')()
const connectionString = 'postgres://szvahsbw:ldAI8ezK1bO99gAVYt_mWfaBZoygyjEm@balarama.db.elephantsql.com/szvahsbw'
const db = pgp(connectionString)
const session = require('express-session')
var bcrypt = require('bcryptjs')


app.use(session({
    secret: 'sksksksks',
    resave: false,
    saveUninitialized: true
}))

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async(req, res) => {
    const username = req.body.username
    const password = req.body.password

    let user = await db.oneOrNone('SELECT id, username, password from users WHERE username = $1', [username])

    if(user) {
        // compare passwords 
        const result = await bcrypt.compare(password, user.password)
        if(result) {
            // user has been authenticated 
            // put something in the session 
            if(req.session) {
                req.session.userId = user.id 
            }

            // send them to the home screen 
            res.redirect('/index')
        } else {
            res.render('login', { errorMessage: 'Invalid credentials.'})
        }
    } else {
        res.render('login', { errorMessage: 'no'})
    }
})


app.get('/', (req, res) => {
    res.redirect('/login')
})

app.post('/signUp', async (req, res) => {
    
    const username = req.body.username
    const password = req.body.password
    let salt = await bcrypt.genSalt(10)
    let hashedPassword = await bcrypt.hash(password, salt)
    await db.none('INSERT INTO users(username, password) VALUES($1, $2)', [username, hashedPassword])

    res.redirect('/')
})

app.get('/index', async (req, res) => {
    const blog = await db.any('SELECT id, title, body, created_at, date_updated FROM blog')
    console.log(blog)

    res.render('index', { blog: blog})
})

app.post('/delete-blog', async (req, res) => {

    const blogId = parseInt(req.body.blogId) 
    await db.none('DELETE FROM blog WHERE id = $1',[blogId])
    res.redirect('/index')
})

app.post('/add-blog', async (req, res) => {
    
    const title = req.body.title 
    const body = req.body.body

    await db.none('INSERT INTO blog(title, body) VALUES($1,$2)', [title, body])

    res.redirect('/index')

})

app.post('/post-details', async (req, res) => {
    console.log(req.body.id)
    const post = await db.one('SELECT id, title, body, created_at, date_updated FROM blog WHERE id = $1', [parseInt(req.body.id)])
    const comments = await db.any('SELECT body, id FROM comments WHERE post_id = $1', [req.body.id])
    console.log(post)
    res.render('postDetails', {post: post, comments: comments})
})

app.post('/add-comment', async (req, res) => {
    await db.none('INSERT INTO comments(body, post_id) VALUES($1, $2)', [req.body.comment, parseInt(req.body.post_id)])
    res.redirect('/index')
})

app.listen(8080, () => {
    console.log('server is running on http://localhost:8080')
})