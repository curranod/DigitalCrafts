const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
app.use(express.urlencoded())
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
const mongoose = require('mongoose')
const Task = require('./schemas/task')


mongoose.connect('mongodb+srv://curranod840:zSfsG5c5SeoIaPpT@cluster.8cz7y6f.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
})
.then(() => {
    console.log('DB connected')
}).catch((error) => {
    console.log(error)
})

app.get('/', async(req, res) => {
    const task = await Task.find({})
    res.render('index', {task: task})
})

app.post('/addTask', async (req, res) => {
    const task = new Task({
        taskName: req.body.taskName,
        taskPriority: req.body.taskPriority,
        completedDate: req.body.date 
    })
    await task.save()
    res.redirect('/')
})

app.post('/update-task', async (req, res) => {
    const taskId = req.body.taskId
    const item = await Task.findById(taskId)
    res.render('update', item)
})

app.post('/updateEditor', async(req, res) => {
    const taskId = req.body.taskId
    const taskToUpdate = {
        taskName: req.body.taskName,
        taskPriority: req.body.taskPriority,
    }
    await Task.findByIdAndUpdate(taskId, taskToUpdate)
    res.redirect('/')
})

app.post('/delete-task', async (req, res) => {
    const taskId = req.body.taskId
    await Task.findByIdAndDelete(taskId)
    res.redirect('/')
})



app.listen(8080,() => {
    console.log("Server is running on http://localhost:8080")
  })