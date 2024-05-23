const express = require('express')
const Admin = require('./routes/Admin')
const User= require('./routes/ConstUser')
const Buses= require('./routes/Buses')
const Buses2=require('./routes/Buses2')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/Bus-Route')

mongoose.connection.on('connected',()=>{
    console.log("Data-Base is connected")
})
app.get('/',(req,res)=>{
    res.send("Back-server")
})

app.use('/users',User)
app.use('/buses', Buses)

app.use('/express',Buses2)

app.use('/admin',Admin)

app.listen(4000,()=>{
    console.log("Server is running");
})