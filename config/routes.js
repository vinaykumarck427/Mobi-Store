const express = require('express')
const router = express.Router()
const productController = require('../app/controller/0.productController')
const specificationController = require('../app/controller/1.specificationController')
const userController = require('../app/controller/2.userController')
const compareController = require('../app/controller/3.compareController')

router.get('/product',productController.list)
router.get('/product/:id',productController.show)
router.post('/product',productController.create)

module.exports = router