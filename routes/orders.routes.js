const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controllers')

router.post('/order', userController.createUser)
router.get('/order', userController.getUsers)
router.get('/order/:id', userController.getOneUser)
router.put('/order', userController.updateUser)
router.delete('/order/:id', userController.deleteUser)




module.exports = router