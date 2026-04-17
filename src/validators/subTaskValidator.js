const {z}= require('zod')

const subTaskSchema= z.object({
    name:z.string().min(3,'Name length should atleast 3 '),
    status: z.enum(['pending', 'in-progress', 'completed']),
    taskId:z.string().min(3,'Task Id should atleast 3 '),
})



module.exports= subTaskSchema;