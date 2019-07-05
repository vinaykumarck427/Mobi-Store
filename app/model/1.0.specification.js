const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SpecificationSchema = new Schema({
    general:{
            launchDate:{
            type: Date,
            required: true
        },
        brand:{
            type: Schema.Types.ObjectId,
            ref: 'Brand'
        },
        operatingSystem:{
            type: String,
            required: true
        },
        phonetype:{
            type: String,
            default: 'SmartPhone'
        },
        simSlot:{
            simOne:{
                type: String,
                isVolTE: Boolean,
                required: true,
                network:{
                    type: Schema.Types.ObjectId,
                    ref:'Network'
                }
            },
            simTwo:{
                type: String,
                isVolTE: Boolean,
                default:'null',
                network:{
                    type: Schema.Types.ObjectId,
                    ref: 'network'
                }
            }
        }
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
        },
        ram:{
            type: Number,
            required: true
        },
        storage:{
            internalMemory:{
                type: Number,
                default: 16
            },
            isExpandable:{
                type: String,
                default:false
            }
        }
    },
    cameraFrnt:{
        type: Schema.Types.ObjectId,
        ref: 'Camera'
    },
    cameraBack:{
        type: Schema.Types.ObjectId,
        ref: 'Camera'
    },
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
            default: true
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
        isFingerPrintSensor:{
            type: Boolean,
            default: false
        },
        isQuickCharging:{
            type: Boolean,
            default: false
        },
        audioJack:{
            type: String,
            default: '3.5mm'
        }
    }    
})

const Specification = mongoose.model('Specification', SpecificationSchema)

module.exports = Specification