const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {arr: moviesList})
})

router.get('/create', (req, res) => {
    res.render('addMovie')
})

router.post('/create', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const genre = req.body.genre
    const posterUrl = req.body.posterUrl

    const newMovie = {
        title: title,
        description: description,
        genre: genre,
        posterUrl: posterUrl,
        id: moviesList.length + 1
    }

    moviesList.push(newMovie)
    res.redirect('/movies')
})

router.post('/delete', (req, res) => {
    const id = parseInt(req.body.id)
    moviesList = moviesList.filter(movie => movie.id !== id)
    res.redirect('/movies')
})

router.post('/:id', (req, res) => {
    const movieDetails = {
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
    posterUrl: req.body.posterUrl
    } 
    const Id = req.params.id
    movieDetails.push(movieInfo)
    res.redirect('/Id')
})

module.exports = router