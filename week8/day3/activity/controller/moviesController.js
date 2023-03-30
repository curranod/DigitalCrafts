const models = require('../models')

const fetchMovies = async (req, res) => {
    const movies = await models.Movie.findAll({})
    res.render('index', { movies: movies })
}

module.exports = {
    fetchMovies, 
    addMovie
}