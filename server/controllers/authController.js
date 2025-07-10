//local modules 
const userModel = require('../models/userModel');
const generateOTP = require('../helpers/otp');
const {hashPassword, comparePassword} = require('../helpers/authHelper');


const registerController = async (req, res) =>{
    try {
       const {email, password, name, contact} = req.body;

       //validating empty fields
       if(!email || !password || !name || !contact){
        res.send({
            success: false,
            message:'All details should be fullfilled'
        })
        return
       }

       //checking the email format 
       const emailRegx = /^[a-z][a-z0-9.%+-]+@[a-z]+\.[a-z]{2,}$/
       if(!emailRegx.test(email)){
        res.send({
            success: false,
            message: 'Email format invalid'
        })
        return
       }

       //checking the password format 
       const passRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,}$/
       if(!passRegx.test(password)){
            res.send({
                success: false,
                message: 'Password validation failed'
            })
        return
       }

       //checking the contact format
       const contactRegx = /^[9][678][0-9]{8}$/
       if(!contactRegx.test(contact)){
        res.send({
            success: false,
            message : 'Invalid contact'
        })
        return
       }

       //validating if there is already a same user according to email
       const exists = await userModel.findOne({email});
       if(exists){
        res.send({
            success: false,
            message: 'User already exists with this email'
        })
        return
       }

       //hashing the password 
       const hashedPassword = await hashPassword(password);

       //recording into the database
       const user = await userModel({email, password:hashedPassword, name, contact}).save();
       if(!user){
        res.send({
            success: false,
            message: 'Failed creating user',
        })
        return
       }

       //sending the response to user after all validation and recording of data
       res.send({
            success: true,
            message: 'User created successfully',
            user
        })

        
    } catch (error) {
        res.send({
            error:error.message,
            success:false,
            message: 'something went wrong registering user'
        })
    }
}
const loginController = async (req, res) => {
    try {
        //checking empty data
        const {email,password} = req.body;
        if(!email || !password){
            res.status(400).send({
                success: false ,
                message: 'Email or password is empty'
            })
            return
        }

        //checking user avaibility
        const user = await userModel.findOne({email});
        if(!user){
            res.status(401).send({
                success: false,
                message: 'User doesnot exist '
            })
            return
        }

        //checking the password of available user 
        const match = await comparePassword(password,user.password);
        if(!match){
            console.log(match);
            res.status(401).send({
                success: false,
                message: 'Credintials doesnot matched'
            })
            return
        }

        
        res.send({
            message:'Login successfull',
            user:{
                email: user.email,
                name: user.name,
                contact: user.contact,
                role: user.role
            }
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