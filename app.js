const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')

app.use(bodyParser.json())
app.use(cors())
routes(app)


mongoose.connect('mongodb://localhost/tab-tracker')
    .then(() => {
        console.log('MongoDB Connected and server started')
        app.listen(5000)
    })
    .catch(err => console.log(err))