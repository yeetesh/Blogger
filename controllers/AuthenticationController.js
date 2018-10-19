const User = require('../mdoels/user')

module.exports = {
    register(req,res,next) {
        var data = {}
        data['username'] = req.body.username
        data['password'] = req.body.password
        User.create(data, function (err,doc) {
            if(err){
                var response = {}
                response['message'] = 'Could not register'
                res.status(404).json(response)
            }
            else{
                var response = {}
                response['message'] = 'Registration Succesful'
                res.status(200).json(response)
            }
        })
    },

    login(req,res,next) {
        var data = {}
        data['username'] = req.body.username
        data['password'] = req.body.password
        User.findOne(data, function(err,doc) {
            var response = {}
            if(doc == null){
                response['message'] = 'Could not find user'
                res.status(404).json(response)
            }
            else {
                response['message'] = 'Succesfully logged in'
                res.status(200).json(response)
            }
        })
    }
}