const Subtask = require("../models/Subtask");
const Task = require("../models/Task");

const createSubTask = async (data) => {
    const existingTask = await Task.findOne({ _id: data.taskId })
    if (!existingTask) {
        const err = new Error("Task Id invalid");
        err.statusCode = 404;
        throw err;
    }

    const existingSubTask = await Subtask.findOne({ name: data.name })
    if (existingSubTask) {
        const err = new Error("Subtask already Exists");
        err.statusCode = 400;
        throw err;
    }
    const newSubTask = await Subtask.create({ name: data.name, task: existingTask._id });
    return newSubTask;
}


const updateSubTask = async (_id, data) => {
    const existingSubTask = await Subtask.findOne({ _id: _id }).populate("task")
    // console.log(existingSubTask)
    // const task= await Task.findOne({_id:existingSubTask.taskId})
    
    if (!existingSubTask) {
        const err = new Error("SubTask Id invalid");
        err.statusCode = 404;
        throw err;
    }
    const updatedSubTask = await Subtask.updateOne({ _id: _id }, { $set: { ...data } },
        { upsert: true });


    return updatedSubTask;
}


module.exports = { createSubTask, updateSubTask }
