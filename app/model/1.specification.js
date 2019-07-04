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
    type:{
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
    designDimensions:{
        height:{
            type: Number,
            required: true
        },
        width:{
            type: Number,
            required: true  
        },
        thickness:{
            type: Number,
            required: true
        },
        weight:{
            type: Number,
            required: true
        },
        color:{
            type: String,
            required: true
        }
    },
    display:{
        screenSize:{
            type: Number,
            required: true
        },
        screenResolution:{
            type: Number,
            required: true
        },
        aspectRatio:{
            type: Number,
            required: true
        },
        pixelDensity:{
            type: Number,
            required: true
        },
        displayType:{
            type: String,
            required: true
        },
        
    },
    performance:{
        chipset:{
            type: String,
            required: true
        },
        processor:{
            type: String,
            required: true
        }
    },
    ram:{
        type: Number,
        required: true
    },
    storage:{
        type: Number,
        required: true
    },
    camera:{},
    battery:{},
    connectivity:{},
    multimedia:{},
    speacialFeature:{}
    
})

const Specification = mongoose.model('Specification', SpecificationSchema)

module.export = Specification