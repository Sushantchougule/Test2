const { default: mongoose } = require("mongoose");

const activityLogSchema= mongoose.Schema({
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'
    },
})


const ActivityLog=mongoose.model('ActivityLog',userSchema)
module.exports=ActivityLog;