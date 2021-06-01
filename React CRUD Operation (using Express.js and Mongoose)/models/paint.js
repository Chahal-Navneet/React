const mongoose = require('mongoose');
const paintSchema = mongoose.Schema({
    "paintId": {type:String,requires:true},
    "paintName": {type:String,requires:true},
    "paintAmount": {type:Number,requires:true},
    "paintQuantity": {type:Number,requires:true},
},{versionKey: false})

module.exports = mongoose.model("paints", paintSchema);