const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SpecificationSchema = new Schema({
    launchDate:{
        type: Date,
        required: true
    },
    brand:{

    },
    operatingSystem:{
        type: String,
        required: true
    },
    type:{
        type: String,
        default: 'SmartPhone'
    },
    simSlot:{
        simOne:{
            type: String,
            network: String,
            isVolTE: Boolean,
            required: true
        },
        simTwo:{
            type: String,
            network: String,
            isVolTE: Boolean,
            default:'null'
        }
    },
    isFingerPrintSensor:{
        type: Boolean,
        default: false
    },
    isQuickCharging:{
        type: Boolean,
        default: false
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
    chipset:{
        type: String,
        required: true
    },
    processor:{
        type: String,
        required: true
    },
    ram:{
        type: Number,
        required: true
    },
    storage:{
        type: Number,
        required: true
    },
    cameraFrnt:{},
    cameraBack:{},
    battery:{
        capacity:{
            type: Number,
            required: true
        },
        replaceable:{
            type: Boolean,
            default: false
        }
    },
    connectivity:{
        wifi:{
            type: String,
            default: '2.4 only'
        },
        bluetooth:{
            type: String,
            default:'4.0',
        },
        gps:{
            type: String,
            required: true
        }
    },
    connector:{
        type: String,
        default: 'micro-USB'
    },
    multimedia:{
        type: String,
        default: 'FM Radio'
    },
    specialFeature:{
        type: String,
        default: 'null'
    }    
})

const Specification = mongoose.model('Specification', SpecificationSchema)

module.exports = Specification