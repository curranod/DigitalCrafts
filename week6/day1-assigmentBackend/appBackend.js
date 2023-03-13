const express = require('express')
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())

const tasks = []

app.get('/todo', (req, res) => {
    res.status(200).json(tasks)
})

app.post('/todo', (req, res) => {
    const titleInp = req.body.title
    const priorityInp = req.body.priority
    const dateInp = req.body.date
    const tasksItem = {title: titleInp, priority: priorityInp, date: dateInp}
    tasks.push(tasksItem)
    res.status(200).json({success: true, message: 'added'})
})

app.delete('/todo/:id', (req, res) => {
    const id = req.params.id;
    tasks.splice(id, 1);
      res.status(200).json({ success: true, message: 'Task deleted successfully.' });
});
  

app.listen(8080, () => {
    console.log('Server is running...')
})