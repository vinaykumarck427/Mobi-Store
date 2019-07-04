const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SpecificationSchema = new Schema({
    launchDate:{
        type: Date,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    operatingSystem:{
        type: String,
        required: true
    },
    simSlot:{
        simOne:{
            type: String,
            network: String,
            required: true
        },
        simTwo:{
            type: String,
            network: String,
            required: true
        }
    },
    isFingerPrintSensor:{
        type: Boolean,
        required: true
    },
    isQuickCharging:{
        type: Boolean,
        required: true
    },
    design:{},
    display:{},
    performance:{},
    storage:{},
    camera:{},
    battery:{},
    connectivity:{},
    multimedia:{},
    speacialFeature:{}
    
})

const Specification = mongoose.model('Specification', SpecificationSchema)

module.export = Specification