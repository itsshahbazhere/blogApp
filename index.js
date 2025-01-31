const express = require('express')
const app = express()

require('dotenv').config();
const blogRoutes = require('./routes/blogs');

const PORT = process.env.PORT || 4000;
const dbConnect = require('./config/database');

dbConnect();

//parse json
app.use(express.json());

//mount
app.use('/api/v1',blogRoutes)

//start server
app.listen(PORT, ()=>{
    console.log(`Server is runnig at ${PORT}`)

})

//default route
app.get('/', (req,res)=>{
    res.send(`<h1>Hii Md, Welcome to my server</h1>`);
})
