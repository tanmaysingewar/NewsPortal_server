const express = require('express')
const { checkToken } = require('../middlewares/auth')
const { createNews, getAllPost, createComment, deletePost, getComments } = require('../controllers/post')
const router = express.Router()

router.post('/post/create',createNews)

router.get('/post/all',getAllPost)

router.post('/post/comment',createComment);

router.get('/post',getComments);

router.delete('/post/delete',deletePost);


module.exports = router;