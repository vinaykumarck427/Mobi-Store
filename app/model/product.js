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
<<<<<<< HEAD
        type: Number
=======
        type: Number,
        default: 123
    },
    reviews:{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    },
    specification:{
        type: Schema.Types.ObjectId,
        ref: 'Specification'
>>>>>>> reactStepZilla
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