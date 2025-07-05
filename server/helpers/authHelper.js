//external module 
const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = bcrypt.hash(password,saltRounds);
        return hashedPassword;
        
    } catch (error) {
        console.log("Error while hashing the password");
    }
}

const comparePassword = (password, hashedPassword) => {
    return bcrypt.compare(password,hashedPassword);
}

exports.hashPassword = hashPassword;
exports.comparePassword = comparePassword;