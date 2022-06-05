const express = require('express')
const { addAdvertisement } = require('../controllers/advertisement')
const { addMarquee } = require('../controllers/marquee')
const { greetsdUser, createUser, loginUser, getUser, getAllUsers, deleteUser } = require('../controllers/user')
const { checkToken } = require('../middlewares/auth')
const router = express.Router()


router.get('/',greetsdUser)

router.post('/create',createUser)

router.post('/login',loginUser)

router.get('/user',getUser)

router.get('/user/all',getAllUsers)

router.delete('/user/delete',deleteUser)

module.exports = router;