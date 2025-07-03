//internal module 
const express = require('express');

//local modules
const {loginController} = require('../controllers/authController');

//routes initialization
 const authRouter = express.Router();


//routes
authRouter.post('/login',loginController);

module.exports = authRouter;