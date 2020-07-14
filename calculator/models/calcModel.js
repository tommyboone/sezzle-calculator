const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calcSchema = new Schema ({
    num1: {type: Number, required: true},
    operator: {type: String, required: true},
    num2: {type: Number, required: true},
    result:{ type:Number, required: true}

})

const Calculator = mongoose.model("Calculator", calcSchema)

module.exports= Calculator;