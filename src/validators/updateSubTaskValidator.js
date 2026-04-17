const {z}= require('zod')

const updateSubTaskSchema= z.object({
    name:z.string().min(3,'Name length should atleast 3 ').optional(),
    status: z.enum(['pending', 'in-progress', 'completed']).optional(),
})



module.exports= updateSubTaskSchema;