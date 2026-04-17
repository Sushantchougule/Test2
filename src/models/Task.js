const { default: mongoose } = require("mongoose");

const taskSchema = mongoose.Schema({
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
    project: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})


const Task = mongoose.model('Task', taskSchema)
module.exports = Task;