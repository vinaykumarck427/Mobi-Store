const mongoose = require('mongoose')

const Scheme = mongoose.Scheme

const NetworkSchema = new Schema ({
    network:{
        fourG:{
            type: Boolean,
            default: false
        },
        threeG:{
            type: Boolean,
            default: false
        },
        twoG:{
            type: Boolean,
            required: true
        }
    }
})

const Network = mongoose.model('Network', NetworkSchema)

module.exports = Network