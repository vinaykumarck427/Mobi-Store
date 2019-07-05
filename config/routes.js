const express = require('express')
const router = express.Router()
const productController = require('../app/controller/0.productController')
const specificationController = require('../app/controller/1.specificationController')
const userController = require('../app/controller/2.userController')
const compareController = require('../app/controller/3.compareController')

router.get('/product',productController.list)
router.post('/product',productController.create)
router.get('/product/:id', productController.show)
router.put('/product/:id',productController.update)
router.delete('/product/:id',productController.destroy)

router.get('/specification', specificationController.list)
router.post('/specification', specificationController.create)
router.get('/specification/:id', specificationController.show)
router.put('/specification/:id', specificationController.update)
router.delete('/specification/:id', specificationController.destroy)


module.exports = router