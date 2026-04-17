



const authService= require('../services/authService');
const userSchema = require('../validators/userValidator');
const register = async (req, res, next) => {
  
    const data = userSchema.parse(req.body);
    const newUser = await authService.createUser(data);
    return res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: newUser
    })
}
const login = async (req, res, next) => {
   
    const data = userSchema.parse(req.body);
    const result = await authService.loginUser(data);
    return res.status(201).json({
        success: true,
        message: 'User login success',
        data: result
    })
}


module.exports={register,login};