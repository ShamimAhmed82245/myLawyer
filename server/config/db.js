const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://127.0.0.1:27017/myLawyer').then(
    ()=>{
        console.log('connected to database');
    }
)
.catch((err)=>{
    console.log('Could not connect to db' + err);
})