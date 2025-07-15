//external module
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).send({
                success: false,
                message: 'No token found'
            })
        }

        //if token exists validating the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).send({
                success: false,
                message: 'Invalid token sent'
            })
        }
        next();

    } catch (error) {
        res.send({
            success: false,
            error: error.message
        })
    }

}



exports.verifyToken = verifyToken;
