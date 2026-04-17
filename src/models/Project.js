const { default: mongoose } = require("mongoose");

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})


const Project = mongoose.model('Project', projectSchema)
module.exports = Project;