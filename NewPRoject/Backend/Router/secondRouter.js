const express = require('express')
const router = express.Router()

const secondController = require('../Controllers/SecondController')


router.post('/create', secondController.create)
router.get('/getAll', secondController.getAll)

module.exports = router