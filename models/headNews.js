const mongoose = require('mongoose');
const {Schema} = mongoose

const headNewsSchema = new Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    date :{
        type : String,
        required : true,
        trim : true
    },
    news : {
        type : String,
        required : true,
        trim : true
    },
    image : {
        type : String,
        required : true,
        trim : true
    }

})

module.exports = mongoose.model('HeadNews', headNewsSchema)