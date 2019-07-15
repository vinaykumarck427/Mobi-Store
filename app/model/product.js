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
        default: 123
    },
    reviews:{
        type: SChema.Types.ObjectId,
        ref: 'Review'
    },
    specification:{
        type: Schema.Types.ObjectId,
        ref: 'Specification'
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product