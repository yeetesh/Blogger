const User = require('../mdoels/user')

module.exports = {
    register(req,res) {
        var data = {}
        data['username'] = req.body.username
        data['password'] = req.body.password
        User.create(data, function (err,doc) {
            if(err){
                console.log('Could not register')
                res.send('Could not register')
            }
            else{
                console.log('Registered')
                res.send('Registered')
            }
        })
    },

    login(req,res) {
        var data = {}
        data['username'] = 'test'
        data['password'] = 'test'
        User.findOne(data, function(err,doc) {
            if(doc == null){
                res.send('Could not find user')
                console.log('Could not find user')
            }
            else {
                res.send('User found')
                console.log('User found')
            }
        })
    }
}