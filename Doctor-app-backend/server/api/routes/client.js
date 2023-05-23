const express = require('express')
const router = express.Router()
const ClientController = require('../controllers/Client/ClientController')

// Import the modified DoctorsIndex function
const { DoctorsIndex } = require('../controllers/Client/ClientController')

router.get('/doctors', async (req, res, next) => {
  try {
    // Call the modified DoctorsIndex function
    await DoctorsIndex(req, res, next)
  } catch (error) {
    next(error)
  }
})

module.exports = router

// const express = require('express')
// const router = express.Router()
// const ClientController = require('../controllers/Client/ClientController')

// router.get('/doctors', ClientController.DoctorsIndex)

// module.exports = router