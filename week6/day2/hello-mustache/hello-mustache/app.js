// server side pages means that your server will return the complete page. 

const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

// setting up mustache as a templating engine 
app.engine('mustache', mustacheExpress())
// the pages are located in the views directory
app.set('views', './views')
// extension for all the pages 
app.set('view engine', 'mustache')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080, () => {
    console.log('Server is Running')
})
