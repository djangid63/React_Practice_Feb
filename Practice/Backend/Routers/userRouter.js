const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')


router.post('/signup', userController.signUp)
router.post('/login', userController.login)
router.patch('/update', userController.update)
router.delete('/delete/:id', userController.delete)
router.get('/getAll', userController.getAllUsers)

module.exports = router