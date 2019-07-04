const express = require('express')
const Product = require('../model/0.product')

module.exports.list = (req,res) => {
    Product.find()
    .then((products) => {
        res.json(products)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.create = ('/',(req,res) => {
    const body = req.body
    const product = new Product(body)
    product.save()
        .then((products) => {
            res.json(products)
        })
        .catch((err) =>{
            res.json(err)
        })
})
