const {z}= require('zod')


const projectSchema= z.object({
    name:z.string().min(3,'Name length should atleast 3 '),
    userId:z.string().min(3,'User Id should atleast 3 '),
})


module.exports= projectSchema;