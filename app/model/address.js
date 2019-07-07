const mongoose = require('mongoose')

const Schema = mongoose.Schema
const addressSchema = new Schema({
  addressType:{
    type:String,
    default:true,
    required:true
  },
  street:{
    type:String
  },
  city:{
    type:String
  },
  pinCode:{
    type:Number
  },
  landmark:{
    type:String
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
})

const Address = mongoose.model('Address', addressSchema)

module.exports = Address
// address
//   - _id
//   - type
//   - street
//   - city
//   - pin
//   - landmark
//   - user 