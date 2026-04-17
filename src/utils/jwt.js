const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET;

const createToken = (userDetails) => {
    try {
        return jwt.sign(userDetails, SECRET, { expiresIn: '1h' })
    }
    catch (e) {
        const err = new Error("Error creating token");
        err.statusCode = 401;
        throw err;
    }
}


const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET);
    }
    catch (e) {
        const err = new Error("Invalid Token");
        err.statusCode = 401;
        throw err;
    }
}


module.exports={verifyToken,createToken};
