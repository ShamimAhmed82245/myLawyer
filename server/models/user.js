const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
    },
    memberID: {
        type: Number,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        
    },
    role: {
        type: String,
        require: true,
       
    },
    category: {
        type: String,
        require: true,
       
    },
    gender: {
        type: String,
        require: true,
        
    },
    address: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    chamber: {
        type: String,
        require: true,
    },
    fees: {
        type: Number,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    },
})

mongoose.model("user",userSchema);