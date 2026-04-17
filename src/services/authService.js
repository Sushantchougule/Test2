const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { createToken } = require('../utils/jwt');

const createUser = async (data) => {

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const existingUser = await User.findOne({ email: data.email })

    if (existingUser) {
        const err = new Error("User already Exists");
        err.statusCode = 400;
        throw err;
    }
    const newUser = await User.create({ email: data.email, password: hashedPassword });
    return newUser;
}


const loginUser = async (data) => {
    const existingUser = await User.findOne({ email: data.email })

    if (!existingUser) {
        const err = new Error("Invalid email or password");
        err.statusCode = 401;
        throw err;
    }

    const isMatch = await bcrypt.compare(data.password,existingUser.password);
    if (!isMatch) {
        const err = new Error("Invalid email or password");
        err.statusCode = 401;
        throw err;
    }
    const token= createToken({id:existingUser._id,email:existingUser.email});

    return {user:{id:existingUser._id,email:existingUser.email},token};
}
module.exports = { createUser,loginUser };