const  mongoose  = require("mongoose");

const cmpSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    currency:{
        type:String,
        required: true
    },
    address: {
        type: String,
    }

},{timestamps:true});

module.exports = mongoose.model("companies",cmpSchema);