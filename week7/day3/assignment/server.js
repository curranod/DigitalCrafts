const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const models = require('./models')
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())

app.use(session({
    secret: 'THISCANBEANYTHING',
    saveUninitialized: false
}))

app.post('/add-comment', async (req, res) => {
    const comment = models.Comment.build({
        title: req.body.comment_title,
        body: req.body.comment_body,
        post_id: parseInt(req.body.post_id)
    })
    await comment.save()
    res.redirect('/index')
})

app.post('/delete-comment', async (req, res) => {
    await models.Comment.destroy({
        where: {
            id: parseInt(req.body.comment_id)
        }
    })
    res.redirect('/index')
})

app.get('/index', async(req, res) => {
    const posts = await models.Post.findAll({
        include: [
            {model: models.Comment, 
            as: 'comments'}
        ]
    })
    res.render('index', {posts: posts})
})

app.post('/add-blog', async(req, res) => {
    const newPost = await models.Post.build({
    title: req.body.title,
    body: req.body.body,
    category: req.body.categories,
    })
    await newPost.save()    
    res.redirect('/index')
})

app.post('/delete-post', async (req, res) => {
    await models.Post.destroy({
        where: {
            id: parseInt(req.body.id)
        }
    })
    res.redirect('/index')
})

app.post('/filter', async (req,res) => {
    const filteredPosts = await models.Post.findAll({
        where: {
            category: req.body.categories
        }
    })
    console.log(filteredPosts)

    let filteredArr = []
    for(let i=0; i < filteredPosts.length; i++) {
        const postInfo = {
            id: filteredPosts[i].dataValues.id,
            title: filteredPosts[i].dataValues.title,
            body: filteredPosts[i].dataValues.body,
            categories: filteredPosts[i].dataValues.categories
        }
        filteredArr.push(postInfo)
    }
    res.render('index', {posts: filteredArr})
})

app.listen(8080, () => {
    console.log('server is running on http://localhost:8080')
})