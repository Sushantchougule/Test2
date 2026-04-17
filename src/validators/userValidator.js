const {z}= require('zod')


const userSchema= z.object({
    email:z.string().email(),
    password:z.string().min(8,'password length should be atleast 8'),
    role: z.enum(['admin', 'manager', 'user']).optional()
})


module.exports= userSchema;