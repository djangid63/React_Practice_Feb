const express = require('express')
const router = express.Router()
const auth = require('../Middleware/auth')

const userController = require('../Controllers/userController')

router.post('/signup', userController.signUp)
router.post('/login', userController.login)
router.patch('/updateuser', userController.updateUser)
router.delete('/deleteuser/:id', userController.deleteUser)
router.get('/getusers', userController.getusers)

module.exports = router
