module.exports = function(app) {
    app.get('/',(req,res) => {
        res.send('Yo')
    })
    app.get('/login', (req,res) =>{
        res.send('in login')
    })
}