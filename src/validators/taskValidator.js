const {z}= require('zod')


const taskSchema= z.object({
    name:z.string().min(3,'Name length should atleast 3 '),
    status: z.enum(['pending', 'in-progress', 'completed']),
    priority:z.enum(['low','high','medium']),
    projectId:z.string().min(3,'Project Id should atleast 3 '),
    userId:z.string().min(3,'Project Id should atleast 3 ')
})


module.exports= taskSchema;