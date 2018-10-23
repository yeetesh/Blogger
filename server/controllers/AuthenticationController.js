const User = require('../mdoels/user')

module.exports = {
    register(req,res) {
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
                req.session.user = req.body.username
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
                response['message'] = 'Could not find user in login'
                res.status(404).json(response)
            }
            else {
                if(req.session.user) {
                    res.json({'message' : 'already logged in'})
                }
                else {
                    response['message'] = 'Succesfully logged in'
                    req.session.user = req.body.username
                    res.status(200).json(response)
                }
                
            }
        })
    },
    logout(req,res) {
        if(req.session.user) {
            req.session.destroy(function(){
                console.log("user logged out.")
            })
            res.redirect('/login')
        }
        else res.redirect('/blogs')
    },
    isLoggedIn(req,res,next) {
        if(req.session.user) {
            next()
        }
        else {
            res.status(400).json({'message' : 'not authenticated'})
        }
    },
    isLoggedOut(req,res,next) {
        if(!req.session.user) {
            next()
        }
        else {
            res.status(400).json({'message' : 'already logged in'})
        }
    },
    allUsers(req,res) {
        User.find(function(err,doc) {
            var response = {}
            if(err) {
                response['message'] = 'could not load users'
                res.send(404).json(response)
            }
            else {
                response['users'] = doc
                res.json(response)
            }
        })
    }
}