//internal module 
const express = require('express');

//local modules
const {loginController,registerController} = require('../controllers/authController');

//routes initialization
 const authRouter = express.Router();


//routes
authRouter.post('/login',loginController);
authRouter.post('/register',registerController);

module.exports = authRouter;