const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CompareSchema = new Schema({

})

const Compare = mongoose.model('Compare', CompareSchema)

module.exports = Compare