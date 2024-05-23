const express = require('express')
const router = express.Router()
const bodyparser = require('body-parser')

const UserModel= require('../models/admin-model')
const { route } = require('./ConstUser')

router.use(bodyparser.json())

router.get('/',(req,res)=>{
    res.send("admin-pages")
})

router.get('/get',(req,res)=>{
    UserModel.find()
    .then(admin=>{ res.json(admin) })
    .catch(err=>{console.log(err) ;
        res.status(500).send("Internal Server Error"); 
     })
})

router.post('/post',(req,res)=>{
    const newUsers = new UserModel(req.body)
    newUsers.save()
        .then(response => console.log(response))
        .catch(err => console.log(err))
    res.send("User post page")
})

router.get('/get/:email',(req,res) => {
    console.log(req.params.email)
    UserModel.find({ email:req.params.email })
        .then(admin => res.send(admin))
        .catch(err => console.log(err))
    console.log("get the page ")
})

module.exports=router