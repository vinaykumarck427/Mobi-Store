const express = require('express')
const router = express.Router()
const productController = require('../app/controller/0.productController')
const specificationController = require('../app/controller/1.specificationController')
const userController = require('../app/controller/2.userController')
const compareController = require('../app/controller/3.compareController')
const brandController = require('../app/controller/4.brandController')

router.get('/products',productController.list)
router.post('/products',productController.create)
router.get('/products/:id', productController.show)
router.put('/products/:id',productController.update)
router.delete('/products/:id',productController.destroy)

router.get('/specifications', specificationController.list)
router.post('/specifications', specificationController.create)
router.get('/specifications/:id', specificationController.show)
router.put('/specifications/:id', specificationController.update)
router.delete('/specifications/:id', specificationController.destroy)

router.get('/brands', brandController.list)
router.post('/brands', brandController.create)


module.exports = router