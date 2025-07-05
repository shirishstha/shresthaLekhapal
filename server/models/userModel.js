//external module 
const mongoose = require('mongoose');

//schema definition
const userSchema = new mongoose.Schema({
    email:{
        type : String,
        required : true,
    },
    password:{
        type: String,
        required : true,
    },
    name:{
        type: String,
        required : true,
    },
    contact:{
        type: Number,
        required : true,
    }
},{timestamps:true})

//creating a model 
const userModel = new mongoose.model('user', userSchema); 

module.exports = userModel;