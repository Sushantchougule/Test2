const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
     role: {
        type: String,
        enum: ['admin', 'manager', 'user'],
        default: 'user'
    },
})


const User = mongoose.model('User', userSchema)
module.exports = User;