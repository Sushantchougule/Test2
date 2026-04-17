const projectSchema = require("../validators/projectValidator")

const projectService = require('../services/projectService')

const create = async (req, res, next) => {
    const user=req.user;
    const data={name:req.body.name,userId:req.user._id}
    const newData = projectSchema.parse(data)
    const newProject = await projectService.createProject(newData)
    return res.status(201).json({
        success: true,
        message: 'Prject created successfully',
        data: newProject
    })
}

const findAll=async(req, res, next)=>{
     const data= await projectService.findAll();
        return res.status(200).json({
        success: true,
        message: 'Projects fetched successfully',
        data
    })
}

const update = async (req, res, next) => {
    const _id= req.params.id
    const data = projectSchema.parse(req.body)
    const updatedProject = await projectService.updateProject(_id,data)
    return res.status(201).json({
        success: true,
        message: 'Prject updated successfully',
        data: updatedProject
    })
}
module.exports={create,findAll,update}