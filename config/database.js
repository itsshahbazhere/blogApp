const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.DATABASE_URL;

const dbConnect = () =>{

    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err)=>{
        console.log('MongoDb not connected', err);
        process.exit(1);
    })
}

module.exports = dbConnect;