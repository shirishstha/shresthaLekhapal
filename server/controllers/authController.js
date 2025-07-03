
const loginController = (req, res) => {
   res.send({
    success:true,
    message:"Testing the login controller as it worked successfully"
   })
}

exports.loginController = loginController;