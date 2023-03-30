const express = require('express')
const mustacheExpress = require('mustache-express')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

//app.use(express.static('js','/js'))
app.use(express.static('js'))

// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
    // the pages are located in views directory
app.set('views', './views')
    // extension will be .mustache
app.set('view engine', 'mustache')

let chatMessages = []

// when the person makes a sockets connection 
io.on('connection', (socket) => {
    console.log('User connected...')
    // server can send a message to the connected user 
    io.emit('Houston-Joined', chatMessages)

    // listen for Houston channel 
    socket.on('Houston', chat => {
        //chat.dateCreated = Date() 
        chatMessages.push(chat)
        io.emit('Houston', chat)
    })

})

app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/chat.html')
})

http.listen(8080, () => {
    console.log('Server is running...')
})

