const AuthenticationController = require('./controllers/AuthenticationController')
const BlogsController = require('./controllers/BlogsController')

module.exports = function(app) {
    app.get('/',(req,res) => {
        res.send('Yo')
    })
    app.get('/login', AuthenticationController.login,(req,res) =>{
        res.send('in login')
    })
}