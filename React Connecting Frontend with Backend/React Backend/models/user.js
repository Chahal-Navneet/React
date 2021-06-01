const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    "picture":{type:String},
    "name":{type:String},
    "email":{type:String},
    "age":{type:String},
    "state":{type:String},
    "phone":{type:String},

},{versionKey: false})
module.exports = mongoose.model("users", userSchema);