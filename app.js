const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const usersRoute = require('./routes/users')
const blogsRoute = require('./routes/blogs')


app.use(bodyParser.json())
app.use(cors())
app.use('/users',usersRoute)
app.use('/blogs',blogsRoute)


app.get('*',function (req, res) {
    res.redirect('/blogs')
})


mongoose.connect('mongodb://localhost/tab-tracker')
    .then(() => {
        console.log('MongoDB Connected and server started')
        app.listen(5000)
    })
    .catch(err => console.log(err))