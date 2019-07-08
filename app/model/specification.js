const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SpecificationSchema = new Schema({
    general:{
        launchDate:{
            type: Date,
            default: Date.now()
        },
        brand:{
            type: Schema.Types.ObjectId,
            ref: 'Brand'
        },
        operatingSystem:{
            type: String,
            default:'andriod 9.0'
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
            type: Number
        },
        width:{
            type: Number 
        },
        thickness:{
            type: Number
        },
        weight:{
            type: Number
        },
        color:{
            type: String
        }
    },
    display:{
        screenSize:{
            type: Number
        },
        screenResolution:{
            type: Number
        },
        aspectRatio:{
            type: Number
        },
        pixelDensity:{
            type: Number
        },
        displayType:{
            type: String
        },
        
    },
    performance:{
        chipset:{
            type: String
        },
        processor:{
            type: String
        },
        ram:{
            type: Number
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
            type: Number
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