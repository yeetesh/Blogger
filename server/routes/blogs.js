var express = require('express')
const AuthenticationController = require('../controllers/AuthenticationController')
const BlogsController = require('../controllers/BlogsController')
var router = express.Router()

router.get('/',BlogsController.getTop)
router.post('/create',AuthenticationController.isLoggedIn ,BlogsController.createBlog)
router.get('/:id',BlogsController.getBlog)

module.exports = router;