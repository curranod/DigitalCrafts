const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())
const session = require('express-session')

app.use(session({
    secret: 'secret',
    saveuninitiaized: 'false'
}))

let users = [
    {username: 'curran', password: 'password'},
    {username: 'burran', password: 'bassword'},

]


app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = users.find(user => user.username == username && user.password == password)

    if(user) {
        if(req.session) {
            req.session.username = username
        }
        res.redirect('trips')
    } else {
        res.render('login' , {errorMessage: 'AHHHHHHHHHHHHHHHH AHHHHHHHHHHHHHHH AHHHHHHHHHHHHHHHHHHHHHH'})
    }
})

app.post("/register", (req, res) => {
    let newUsername = req.body.newUsername
    let newPassword = req.body.newPassword
    let existingUser = users.find((user) => {
        return user.username == newUsername
    })
    if(existingUser) {
        res.render("register", {newMessage: "Username already exists."})
    } else {
        let newUser = { username: newUsername, password: newPassword }
        users.push(newUser)
        console.log(users)
        res.redirect('/')
    }
})

app.get('/index', authenticationMiddleware, (req, res) => {
    res.send('index')
})

function authenticationMiddleware(req, res, next) {

    if(req.session) {
        if(req.session.username) {
            next() 
        } else {
            res.redirect('login')
        }
    } else {
        res.redirect('login')
    }

}


let trips = [{
    title: 'New Orleans', 
    image: 'imgUrl',
    departure: '2023-03-10',
    arrive: '2023-03-14',
    tripId: 1
}]

app.get('/trips', (req, res) => {
    res.render('trips', {tripsObj: trips})
})

app.post("/deleteTrip", (req, res) => {
    const tripId = req.body.tripId
    console.log(tripId)
    trips = trips.filter((trip) => trip.tripId != tripId)
    res.redirect('/trips')
})

app.post('/deleteTrip', (req, res) => {
    const tripID = req.body.tripID
    console.log(tripID)
    trips = trips.filter((trip) => trip.tripID != tripID);
  res.redirect("/trips");
})

app.get('/addTrip', (req, res) => {
    res.render('addTrip')
})

app.post('/addTrip', (req, res) => {
    const title = req.body.title
    const image = req.body.image
    const departure = req.body.departure
    const arrive = req.body.arrive

    const tripInfo = {
        title: title,
        image: image,
        departure: departure,
        arrive: arrive,
        tripId: trips.length + 1
    }
    trips.push(tripInfo)

    res.redirect('/trips')
})

app.listen(8080, () => {
    console.log('server is running on http://localhost:8080/login')
})