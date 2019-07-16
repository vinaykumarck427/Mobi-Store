const express = require('express')
const Product = require('../model/product')

module.exports.list = (req,res) => {
    Product.find()
    .then((products) => {
        res.json(products)
    })
    .catch((err) => {
        res.send(err)
    })
}

module.exports.create = (req,res) => {
    const {user} = req
    const body = req.body
    const product = new Product(body)
    product.user = user._id
    product.save()
        .then((product) => {
            res.json(product)
        })
        .catch((err) =>{
            res.send(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    Product.findById(id)
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    Product.findByIdAndUpdate(id, {$set: body}, {new: true})
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.destroy = (req,res) => {
    const id =req.parasms.id
    Product.findByIdAndDelete(id)
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            res.send(err)
        })
}