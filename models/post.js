const mongoose = require('mongoose');
const {Schema} = mongoose

const postSchema = new Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    news : {
        type : String,
        required : true,
        trim : true
    },
    catagory : {
        type : String,
        required : true,
        trim : true
    },
    date : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    comments : [{
        name : {
            type : String,
            trim : true
        },
        comment : {
            type : String,
            trim : true
        }
    }]
})

module.exports = mongoose.model('Post',postSchema)