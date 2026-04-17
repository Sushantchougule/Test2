const Project = require("../models/Project");
const Task = require("../models/Task");

const createTask = async (data) => {
    const existingProject = await Project.findOne({ _id:data.projectId })
    if (!existingProject) {
        const err = new Error("Project Id invalid");
        err.statusCode = 404;
        throw err;
    }

    const existingTask = await Task.findOne({ name: data.name, })
    if (existingTask) {
        const err = new Error("Task already Exists");
        err.statusCode = 400;
        throw err;
    }
    const newTask = await Task.create({ name: data.name,project:existingProject._id,priority:data.priority,assignedTo:data.userId});
    return newTask;
}

const findAllTask=async(filters)=>{
   
    const tasks=await Task.find(filters);
    return tasks;
}

module.exports={createTask,findAllTask}
