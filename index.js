const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Yo')
})

app.listen(8090, function () {
    console.log('Listening on port 8090')
})