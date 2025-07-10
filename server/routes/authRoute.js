//internal module 
const express = require('express');

//local modules
const {verifyToken} = require('../middleware/authMiddleware')

//local modules
const {loginController,registerController} = require('../controllers/authController');

//routes initialization
 const authRouter = express.Router();


//routes
authRouter.post('/login',loginController);
authRouter.post('/register',registerController);

authRouter.post('/private', verifyToken, (req,res) => {
    res.json({
        success: true
    })
});


module.exports = authRouter;