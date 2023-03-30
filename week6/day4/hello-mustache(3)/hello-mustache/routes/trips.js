

const express = require('express')
const router = express.Router() 

// /trips 
router.get('/', (req, res) => {
    res.render('trips')
})

router.get('/:city', (req, res) => {
    console.log(req.params.city)
    city = req.params.city
    res.render('trips', {city: city})
})


module.exports = router 