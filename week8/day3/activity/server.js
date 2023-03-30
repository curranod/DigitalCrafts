const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())



app.listen(8080, () => {
    console.log('server is running on http://localhost:8080')
})