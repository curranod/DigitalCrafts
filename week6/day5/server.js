const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const { dirname } = require('path')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())
app.use(express.static('public'))
const path = require('path');


// app.use((req, res, next) => {
//     res.setHeader('urmom', 'mymom')
//     next()
// })
//1-------------------------------------------------------------

app.get('/', (req, res) => {
    res.send('hello world')
})

//2--------------------------------------------------------------

// app.get('/', (req, res) => {
//     let user = {
//         name: 'Blob',
//         email: 'bob@bee.com',
//         phone: '123'
//     }
//     res.json(user)
// })

//3--------------------------------------------------------------

// app.use((req, res, next) => {
//     console.log(req.method)
//     console.log(req.url)
//     console.log('mid-ware')

// })

//4--------------------------------------------------------------

// app.get('/:anything', (req, res) => {
//     const anything = req.params.anything
//     res.send(`you typed ${anything}`)
// })

//5--------------------------------------------------------------

// app.get('/freshlogger', (req, res) => {
//     res.render('index')
// })

// app.post('/freshlogger', (req, res) => {
//     const input = req.body.input
//     console.log(JSON.stringify(input))
//     res.redirect('/freshlogger')
// })

//6--------------------------------------------------------------

// done

//7--------------------------------------------------------------
// done
//8--------------------------------------------------------------

app.get('/switcheroony', (req, res) => {
    res.render('index')
})

app.post('/freshlogger', (req, res) => {
    const switcher = req.body.button
    res.status(200).send('data recieved')

})

app.get('/old-route', (req, res) => {
    res.redirect('/')
})

//9--------------------------------------------------------------

app.get('/download', (req, res) => {
    const file = path.join(__dirname, 'test.txt')
    res.download(file)
    console.log(__dirname)
})

//10-------------------------------------------------------------

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})


app.listen(8080, () => {
    console.log('server is NOT NOT running on http://localhost:8080')
})