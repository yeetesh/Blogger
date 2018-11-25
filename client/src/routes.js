import Vue from 'vue'
import Router from 'vue-router'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import CreateBlog from './components/CreateBlog'
import Users from './components/Users'
import User from './components/User'
import CreateUser from './components/CreateUser'
import Login from './components/Login'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/blogs',
        component: Blogs,
        name: 'Blogs'
      },
      {
        path: '/blogs/create',
        component: CreateBlog,
        name: 'CreateBlog'
      },
      {
        path: '/blogs/:id',
        component: Blog,
        name: 'Blog'
      },
      {
        path: '/users',
        component: Users,
        name: 'Users'
      },
      
      {
        path: '/users/create',
        component: CreateUser,
        name: 'CreateUser'
      },
      {
        path: '/users/login',
        component: Login,
        name: 'Login'
      },
      {
        path: '/users/:username',
        component: User,
        name: 'User'
      },
      {
        path: '/',
        component: Blogs,
        name: 'Blogs'
      }

    ],
    mode : "history"
  })