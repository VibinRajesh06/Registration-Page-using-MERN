const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/Registration";

mongoose.connect(url).then(()=>{
    console.log("Connection Successfull");
}).catch((e)=>{
    console.log("No Connection")
})