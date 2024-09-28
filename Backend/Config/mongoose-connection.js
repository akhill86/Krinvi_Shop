const mongoose = require('mongoose')
const config = require('config')

mongoose
.connect(`${config.get("MONGODB_URI")}/bagShop`)
.then(()=>{
    console.log("Connected");
})
.catch((error)=>{
    console.log(error);
})

module.exports = mongoose.Connection;           