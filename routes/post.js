const express = require('express')
const { checkToken } = require('../middlewares/auth')
const { createNews, getAllPost, createComment, deletePost, getComments,getPostByCatagory } = require('../controllers/post')
const { getHeadNews, createHeadNews } = require('../controllers/headNews')
const router = express.Router()

router.post('/post/create',createNews)

router.get('/post/all',getAllPost)

router.post('/post/comment',createComment);

router.get('/post',getComments);

router.delete('/post/delete',deletePost);

router.get('/post/headnews',getHeadNews)

router.post('/post/headnews',createHeadNews);

router.get('/getPostByCategory',getPostByCatagory);

module.exports = router;