const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())
app.use(express.static('static'))
const PORT = 8080
const moviesRouter = require('./routes/movies')

app.use('/movies', moviesRouter)

global.moviesList = [{
    title: 'batman',
    description: 'movie desc',
    genre: 'action',
    posterUrl: 'posterUrl',
    id: 2323
}]

app.listen(PORT, () => {
    console.log('server is running on http://localhost:8080/movies')
})