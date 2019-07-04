const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({

    productName:{
        type: String,
        required: true
    },
    image:{
        type: String,
        default: null
    },
    productPrice:{
        type: Number,
        default: 123,
        required: true

    },
    reviews:{
        type: String
    },
    specification:{
        type: String,
        default: abcd
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.export = Product