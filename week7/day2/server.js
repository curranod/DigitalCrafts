const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
var bcrypt = require('bcryptjs');

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())

app.use(session({
    secret: 'password123',
    saveUninitialized: false
}))

app.post('/login', async (req, res) => {
    let password = req.body.password
    let salt = await bcrypt.genSalt(10)
    let hashedPassword = await bcrypt.hash(password, salt)

    const object = {value: hashedPassword}
    res.json(object)
})


app.listen(8080, () => {
    console.log('server is running on http://localhost:8080')
})