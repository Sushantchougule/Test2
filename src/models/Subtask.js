const { default: mongoose } = require("mongoose");

const subTaskSchema= mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})


const Subtask=mongoose.model('Subtask',subTaskSchema)
module.exports=Subtask;