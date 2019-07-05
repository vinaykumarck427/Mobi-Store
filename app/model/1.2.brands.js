const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BrandList = new Schema({
    brandName:{
        title: String,
        // required: true
    }
})

const Brand = mongoose.model('Brand',BrandList)

module.exports = Brand