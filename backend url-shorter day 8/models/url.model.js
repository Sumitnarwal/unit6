const mongoose = require('mongoose')
const shortID = require('shortid')

const shortUrlSchema = new mongoose.Schema({
    url:{type: String, required: true},
    shortId :{type: String, required: true,default:shortID.generate},
    // clicks:{type: Number, required: true,default:0}

})

module.exports = mongoose.model('url',shortUrlSchema)