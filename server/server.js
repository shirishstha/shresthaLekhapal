//external modules
const express = require('express');
const cors = require ('cors');
const dotenv = require('dotenv');

//internal modules
const authRouter = require('./routes/authRoute');
const connectDB = require('./helpers/db');


//initializing app 
dotenv.config();
const app = express();

//database connection 
connectDB();


//resolving cors origin policy and parsing json request
app.use(cors());
app.use(express.json());

//routes
app.use('/api/shresthaLekhapal/landing',(req,res)=> res.send('Your backend loaded success enjoy'));
app.use('/api/shresthaLekhapal/auth',authRouter);


//listening app
const PORT = process.env.PORT;
app.listen(PORT,() => {
    console.log(`Your app is running at http://localhost:${PORT}`);
})