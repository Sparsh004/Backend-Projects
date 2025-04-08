const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;
const db = process.env.DATABASE_URL;

// middleware
app.use(express.json());

const blog = require('./routes/blog');

// mount the path
app.use("/api/v1",blog);

const connectDB = require('./config/database');
connectDB();

app.listen(port,()=>{
    console.log(`app is started at ${port}`);
})

app.get('/',(req,res)=>{
    res.send('this is homepage');
})