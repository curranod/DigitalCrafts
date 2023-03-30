const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())

let trips = [{
    title: 'city'
}]

app.get('/trips', (req, res) => {
    res.render('main', {trips: trips})
})

app.get('/trips/:city', (req, res) => {
    let tripsCity = request.params.cityName
    res.render('main', {nameofCity: req.params.tripsCity})
})

app.listen(8080, () => {
    console.log('server is running on http://localhost:8080')
})