var express = require('express')
const AuthenticationController = require('../controllers/AuthenticationController')
const BlogsController = require('../controllers/BlogsController')
var router = express.Router()

router.get('/login', AuthenticationController.login)
router.get('/create', AuthenticationController.register)
router.get('/:username', BlogsController.getUserBlogs)

module.exports = router