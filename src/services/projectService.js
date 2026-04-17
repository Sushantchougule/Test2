const Project = require("../models/Project");

const createProject = async (data) => {
    const existingProject = await Project.findOne({ name: data.name })
    if (existingProject) {
        const err = new Error("Project already Exists");
        err.statusCode = 400;
        throw err;
    }
    const newProject = await Project.create(data);
    return newProject;
}



const findAll = async () => {
    const projects = await Project.find();
    return projects;
}

const updateProject = async (_id, data) => {
    const existingProject = await Project.findOne({ _id })
    if (!existingProject) {
        const err = new Error("Project Not Found");
        err.statusCode = 404;
        throw err;
    }
    const newProject = await Project.updateOne({ _id: _id }, { $set: { name: data.name } },
        { upsert: true });
    return newProject;
}
module.exports = { createProject, findAll, updateProject };
