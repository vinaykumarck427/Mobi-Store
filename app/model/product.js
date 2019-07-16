const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    productName:{
        type: String,
        required: true
    },
    images:[{
        type: String
    }],
    productPrice:{
        type: Number,
        default: 123
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product