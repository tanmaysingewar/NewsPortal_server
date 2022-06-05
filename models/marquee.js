const mongoose = require('mongoose');
const {Schema} = mongoose

const marqueeSchema = new Schema({
    title : {
        type : String,
        required : true,
        trim : true
    }
})

module.exports = mongoose.model('Marquee', marqueeSchema)