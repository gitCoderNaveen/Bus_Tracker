const express = require('express')
const router =express.Router()
const bodyparser=require('body-parser')

const UserModels = require('../models/bus-model')

router.use(bodyparser.json())

router.get('/',(req,res)=>{
    res.send("bus-pages")
})

router.get('/get/:to', (req, res) => {
    UserModels.find(req.params.to)
        .then(response => {
            res.send(response); 
            console.log("Bus Data is get");
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Internal Server Error"); 
        });
});


router.post('/post',(req,res)=>{
    const newbus = new UserModels(req.body)
    newbus.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("Bus data post")
})


module.exports=router