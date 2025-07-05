//local modules 
const userModel = require('../models/userModel');
const generateOTP = require('../helpers/otp');


const registerController = (req, res) =>{
    try {
       const {email, password, name, contact} = req.body;
        
    } catch (error) {
        res.send({
            error:error.message,
            success:false,
            message: 'something went wrong registering user'
        })
    }
}
const loginController = (req, res) => {
    try {
        const {email} = req.body;
        generateOTP(email);
        res.send({
            message:'Otp sent successfully'
        })
        
    } catch (error) {
        res.send({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
   

}

exports.loginController = loginController;
exports.registerController  = registerController ;