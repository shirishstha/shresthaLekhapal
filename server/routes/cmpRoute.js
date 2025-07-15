//external module 
const express = require('express');


//local module
const { verifyToken } = require('../middleware/authMiddleware');
const {createCompanyController,getAllCompanyController} = require('../controllers/cmpController')


//initalization of router
const cmpRouter = express.Router();

//Routes
cmpRouter.post('/create-company',verifyToken,createCompanyController);
cmpRouter.get('/getAll-company',verifyToken,getAllCompanyController);


module.exports = cmpRouter;