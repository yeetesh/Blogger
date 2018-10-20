var express = require('express')
const AuthenticationController = require('../controllers/AuthenticationController')
const BlogsController = require('../controllers/BlogsController')
var router = express.Router()


router.get('/', AuthenticationController.allUsers)
router.post('/login', AuthenticationController.login)
router.post('/create', AuthenticationController.register)
router.get('/:username', BlogsController.getUserBlogs)

module.exports = router