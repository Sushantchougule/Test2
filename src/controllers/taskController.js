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

module.exports={create}