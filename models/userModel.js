const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required: true
    },
    dateNow:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User',userSchema)