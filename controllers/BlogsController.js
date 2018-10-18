const Blog = require('../mdoels/blog')

module.exports = {
    createBlog(req,res) {
        var data = {}
        data['author'] = 'test'
        data['title'] = 'test'
        data['body'] = 'test'
        Blog.create(data, function(err,doc) {
            if(err){
                console.log('Could not create blog')
            }
            else {
                console.log(doc)
            }
        })
    }
}