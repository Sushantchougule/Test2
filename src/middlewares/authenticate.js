const { verifyToken } = require("../utils/jwt");

const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            const err = new Error("Missing Auth Header")
            err.statusCode = 401;
            throw err;
        }
        const token = authHeader.split(" ")[1]
        if (!authHeader) {
            const err = new Error("Missing Auth Token")
            err.statusCode = 401;
            throw err;
        }
        const verifiedUser=verifyToken(token);
        req.user=verifiedUser;
        next();
    }
    catch (e) {
        next(e);
    }
}

module.exports=authenticate;