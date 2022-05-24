const express = require('express')
const { greetsdUser, createUser, loginUser, getUser } = require('../controllers/user')
const { checkToken } = require('../middlewares/auth')
const router = express.Router()

router.get('/',greetsdUser)

router.post('/create',createUser)

router.post('/login',loginUser)

router.get('/user',getUser)

module.exports = router;