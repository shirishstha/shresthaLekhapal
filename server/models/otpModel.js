//external module
const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    otp:{
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true,
        index: {expires: 0} //this section tells mongo to remove the document after the given date expiration
    }
})

const otpModel = mongoose.model('otp',otpSchema);

module.exports = otpModel;