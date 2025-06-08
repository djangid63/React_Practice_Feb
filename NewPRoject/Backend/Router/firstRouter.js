const express = require('express')
const router = express.Router()

const firstController = require('../Controllers/FirstController')


router.post('/create', firstController.create)
router.get('/getAll', firstController.getAll)
router.post('/audio', firstController.audio)

module.exports = router