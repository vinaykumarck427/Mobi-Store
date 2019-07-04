const mongoose = require('mongoose')

const Scheme = mongoose.Scheme

const NetworkSchema = new Schema ({
    network:{
        fourG:{
            type: Boolean,
            required: true
        },
        threeG:{
            type: Boolean,
            required: true
        },
        twoG:{
            type: Boolean,
            required: true
        }
    }
})

const Network = mongoose.model('Network', NetworkSchema)

module.export = Network