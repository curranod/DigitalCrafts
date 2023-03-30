const express = require('express')
const app = express()
const models = require('./models')
const session = require('express-session')

const mustacheExpress = require('mustache-express')
// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
    // the pages are located in views directory
app.set('views', './views')
    // extension will be .mustache
app.set('view engine', 'mustache')

app.use(express.urlencoded())

app.use(session({
    secret: 'SOMESECRETKEY',
    saveUninitialized: true
}))

app.get('/movies/:movieId', async (req, res) => {
    const movieId = parseInt(req.params.movieId) 

    // find by PK 
    //const movie = await models.Movie.findByPk(movieId)

    const movie = await models.Movie.findByPk(movieId, {
        include: [
            {
                model: models.Review, 
                as: 'reviews'
            }
        ]
    })

    /*
    const movie = await models.Movie.findOne({
        where: {
            id: movieId
        }
    }) */

    console.log(movie)
    //res.json(movie)
    res.render('movie-detail', movie.dataValues)
})

app.get('/', async (req, res) => {
    const movies = await models.Movie.findAll({
        include: [
            {
                model: models.Review, 
                as: 'reviews'
            }
        ]
    })
    console.log(movies)
    res.json(movies)
    //res.render('index', {movies: movies})
})

app.get('/add-movie', (req, res) => {
    res.render('add-movie')
})

app.get('/reviews', async (req, res) => {
    const reviews = await models.Review.findAll({})
    res.json(reviews) // you should res.render 
})

app.get('/reviews/:reviewId', async (req, res) => {

    const reviewId = parseInt(req.params.reviewId) 
    const review = await models.Review.findByPk(reviewId, {
        include: [
            {
                model: models.Movie, 
                as: 'movie'
            }
        ]
    })
    res.json(review)

})

app.post('/add-review', async (req, res) => {

    const title = req.body.title 
    const body = req.body.body 
    const movieId = parseInt(req.body.movieId) 

    const review = models.Review.build({
        title: title, 
        body: body, 
        movie_id: movieId
    })

    const _ = await review.save()
    res.redirect('/')
})

app.post('/add-movie', async (req, res) => {

    const title = req.body.title
    const year = parseInt(req.body.year) 

    const movie = models.Movie.build({
        title: title, 
        year: year 
    })

    // save movie 
    const _ = await movie.save()
    res.redirect('/')
})



app.listen(8080,() => {
    console.log('Server is running...')
}) 