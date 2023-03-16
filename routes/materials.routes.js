const Router = require('express')
const router = new Router()
const postController = require('../controllers/post.controllers')

router.post('/material', postController.createPost)
router.get('/material', postController.getPostsByUser)





module.exports = router