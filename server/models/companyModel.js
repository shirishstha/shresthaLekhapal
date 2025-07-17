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
        required: true
    },
    financialYear:{
        type: Date,
        required: true
    }

},{timestamps:true});

module.exports = mongoose.model("companies",cmpSchema);