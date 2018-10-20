const Blog = require('../mdoels/blog')
const User = require('../mdoels/user')

module.exports = {
    createBlog(req,res) {
        var data = {}
        data['author'] = req.body.author
        data['title'] = req.body.title
        data['body'] = req.body.body
        Blog.create(data, function(err,doc) {
            var response = {}
            if(err){
                response['message'] = 'could not create blog'
                res.status(404).json(response)
            }
            else {
                response['message'] = 'succesfully created'
                res.json(response)
            }
        })
    },
    getTop(req,res) {
        Blog.find(function(err,doc) {
            var response = {}
            if (err) {
                res['message'] = 'blogs not found'
                res.status(404).json(response)
            }
            else {
                response['blogs'] = doc
                res.status(200).json(response)
            }
        })
    },
    getUserBlogs(req,res) {
        User.findOne({'username' : req.params.username }, function(err,doc) {
            if(err || !doc){
                var response = {}
                response['message'] = 'Could not find user'
                res.status(404).json(response)
            }
            else {
                Blog.find({'author' : req.params.username }, function(err,doc) {
                    var response = {}
                    if (err) {
                        res['message'] = 'blogs not found'
                        res.status(404).json(response)
                    }
                    else {
                        response['blogs'] = doc
                        res.status(200).json(response)
                    }
                })
            }
        })
    },
    getBlog(req,res) {
        Blog.findById(req.params.id, function (err,doc) {
            if(err || !doc) {
                res.status(404).json({'message' : 'blog not found'})
            }
            else {
                res.status(200).json(doc)
            }
        })
    }
}