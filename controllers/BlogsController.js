const Blog = require('../mdoels/blog')

module.exports = {
    createBlog(req,res) {
        var data = {}
        data['author'] = req.body.author
        data['title'] = req.body.title
        data['body'] = req.body.body
        Blog.create(data, function(err,doc) {
            var response = {}
            if(err){
                response['message'] = 'Could not create blog'
                res.status(404).send(response)
            }
            else {
                response['message'] = 'Succesfully created'
                res.json(response)
            }
        })
    },
    getTop(req,res) {
        Blog.find(function(err,doc) {
            var response = {}
            if (err) {
                res['message'] = 'Blogs not found'
                res.status(404).json(response)
            }
            else {
                response['blogs'] = doc
                res.status(200).json(response)
            }
        })
    },
    getUserBlogs(req,res) {
        Blog.find({'author' : req.params.username }, function(err,doc) {
            var response = {}
            if (err) {
                res['message'] = 'Blogs not found'
                res.status(404).json(response)
            }
            else {
                response['blogs'] = doc
                res.status(200).json(response)
            }
        })
    }
}