//external module
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

//local module
const otpModel = require('../models/otpModel');


// Generate and send opt
const generateOTP = async (userEmail) => {
    const generatedOTP = Math.floor(10000 + Math.random() * 90000);
    const email = userEmail;
    const expiresAt = new Date(Date.now() + 3 * 60 * 1000); //expires the otp in 3 minutes 

    try {
        //hashing the opt
        const hashedOTP = await bcrypt.hash(generatedOTP.toString(),10) //here 10 refers to the salt rounds
        //storing hashed otp in the DB
        const otpData = await otpModel({ otp:hashedOTP, email, expiresAt }).save();


        //sending the otp to user 

        //creating an email transporter using gmail's smtp server
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'shresthalekhapal@gmail.com',
                pass: 'ofgqirqlfozefshq'
            },
        })

        //defining the email options
        const mailOptions = {
            from: 'shresthalekhapal@gmail.com',
            to: email,
            subject: 'Your OTP for login',
            text: `Your OTP is ${generatedOTP}\n\n This OTP will expire in 3 minutes`,
        };

        //send the OTP email
        transporter.sendMail(mailOptions,(error, info)=>{
            if(error){
                console.log("Error sending email:",error);
            }else{
                console.log("OTP sent: "+ info.response);
            }
        })


    } catch (error) {
        console.log("Error storing otp in the database or error sending otp to user as:", error.message);
    }

}

module.exports = generateOTP;