const express = require('express')
const router =express.Router()
const bodyparser=require('body-parser')

const UserModel = require('../models/bus-model')

router.use(bodyparser.json())

router.get('/',(req,res)=>{
    res.send("Ex-bus-pages")
})

router.get('/get',(req,res)=>{
    UserModel.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
    res.send("User Data is get")
    console.log("get the page ");
})


router.post('/post',(req,res)=>{
    const newbus = new UserModel(req.body)
    newbus.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("Ex-Bus data post")
})


module.exports=router