const taskSchema = require("../validators/taskValidator")

const taskService = require('../services/taskService')

const create = async (req, res, next) => {
    const data = taskSchema.parse(req.body)
    const newTask = await taskService.createTask(data)
    return res.status(201).json({
        success: true,
        message: 'Task created successfully',
        data: newTask
    })
}

const findAll= async (req, res, next) => {
    const status=req.query.status;
    const priority=req.query.priority;
    const userId=req.query.userId;
    let filters={}
    if(status){
        filters.status=status;
    }
    if(priority){
         filters.priority=priority;
    }
    if(userId){
         filters.assignedTo=userId;
    }
    const tasks = await taskService.findAllTask(filters);
    return res.status(201).json({
        success: true,
        message: 'Tasks fetched successfully',
        data: tasks
    })
}

module.exports = { create,findAll }