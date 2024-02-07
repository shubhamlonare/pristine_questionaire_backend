const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please Add the user name"]
    },
    userRole:{
        type: String,
    },
    email:{
        type: String,
        required: [true, "Please add the user email address"],
        unique: [true, "Email address already taken"]
    },
    password:{
        type: String,
        required: [true, "Please add the user password"]
    }
},{
    timeStamps: true
});

module.exports = mongoose.model("User", userSchema)