const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const pgp = require('pg-promise')()
const connectionString = 'postgres://szvahsbw:ldAI8ezK1bO99gAVYt_mWfaBZoygyjEm@balarama.db.elephantsql.com/szvahsbw'
const db = pgp(connectionString)
const session = require('express-session')

app.use(session({
    secret: 'sksksksks',
    saveUninitialized: false
}))

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    res.redirect('/index')
})

app.get('/', (req, res) => {
    res.redirect('/login')
})

app.post('/signUp', async (req, res) => {
    await db.none('INSERT INTO users(username, password) VALUES($1, $2)', [req.body.username, req.body.password])
    res.redirect('/index')
})

app.get('/index', async (req, res) => {
    const blog = await db.any('SELECT id, title, body, created_at, date_updated FROM blog')
    console.log(blog)

    res.render('index', { blog: blog})
})

app.post('/delete-blog', async (req, res) => {

    const blogId = parseInt(req.body.blogId) 
    await db.none('DELETE FROM blog WHERE id = $1',[blogId])
    res.redirect('/')
})

app.post('/add-blog', async (req, res) => {
    
    const title = req.body.title 
    const body = req.body.body

    await db.none('INSERT INTO blog(title, body) VALUES($1,$2)', [title, body])

    res.redirect('/')

})


app.listen(8080, () => {
    console.log('server is running on http://localhost:8080')
})