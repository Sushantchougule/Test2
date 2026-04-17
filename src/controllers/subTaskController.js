const subTaskSchema = require("../validators/subTaskValidator")

const subTaskService = require('../services/subTaskService')
const updateSubTaskSchema = require("../validators/updateSubTaskValidator")

const create = async (req, res, next) => {
    const data = subTaskSchema.parse(req.body)
    const newsubTask = await subTaskService.createSubTask(data)
    return res.status(201).json({
        success: true,
        message: 'subTask created successfully',
        data: newsubTask
    })
}

const update = async (req, res, next) => {
    const _id=req.params.id
    const data = updateSubTaskSchema.parse(req.body)
    const newsubTask = await subTaskService.updateSubTask(_id,data)
    return res.status(201).json({
        success: true,
        message: 'subTask updated successfully',
        data: newsubTask
    })
}
module.exports={create,update}