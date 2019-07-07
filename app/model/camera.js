const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CameraSchema = new Schema({
    resolution:{
        type: String,
        // required: true
    },
    isAutoFocus:{
        type: Boolean,
        // required: true
    },
    physicalAperture:{
        type: String,
        // required: true
    },
    flash:{
        type: Boolean,
        // required: true
    },
    imageResolution:{
        type: Number,
        // required: true
    },
    videoRecording:{
        type: String,
        // required: true
    }
})

const Camera = mongoose.model('Camera', CameraSchema)

module.exports = Camera