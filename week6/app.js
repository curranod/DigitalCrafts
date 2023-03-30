const express = require('express')
const app = express()
app.use(express.json())
let persons = [{firstName: 'John', lastName: 'Doe'}]

app.get('/name', (req, res) => {
    res.status(200).json(persons)
})

app.get('/digital-crafts/cohort/:year', (req,res) => {
    let year = req.params.year
    let statement = `i study at digitalcrafts ${year} cohort`
    res.send(statement)
})

app.post('/name', (req, res) => {
    const firstNameInp = req.body.firstName
    const lastNameInp = req.body.lastName
    const addedName = {firstName: firstNameInp, lastName: lastNameInp}
    persons.push(addedName)
    res.status(200).json({success: true, message: 'name has been added'})
})

app.listen(8080, () => {
    console.log('server is running')
})