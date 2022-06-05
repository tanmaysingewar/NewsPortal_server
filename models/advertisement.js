const mongoose = require('mongoose');
const {Schema} = mongoose

const advertisementSchema = new Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    date :{
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Advertisement', advertisementSchema)