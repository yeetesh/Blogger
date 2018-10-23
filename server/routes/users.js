var express = require('express')
const AuthenticationController = require('../controllers/AuthenticationController')
const BlogsController = require('../controllers/BlogsController')
var router = express.Router()


router.get('/', AuthenticationController.allUsers)
router.post('/login', AuthenticationController.isLoggedOut ,AuthenticationController.login)
router.get('/logout',AuthenticationController.isLoggedIn, AuthenticationController.logout)
router.post('/create', AuthenticationController.isLoggedOut,AuthenticationController.register)
router.get('/:username', BlogsController.getUserBlogs)

module.exports = router