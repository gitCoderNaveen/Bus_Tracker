const express = require('express')
const router = express.Router()
const bodyparser = require('body-parser')

const UserModel = require('../models/User-model')

router.use(bodyparser.json())

router.get('/', (req, res) => {
    res.send("users-page")
})

// router.get('/get',(req,res)=>{
//     UserModel.find()
//     .then(response=>res.send(response))
//     .catch(err=>console.log(err))
//     res.send("User Data is get")
//     console.log("get the page ");
// })


router.get('/get', (req, res) => {
   
    UserModel.find({})
        .then(users => {
            
            res.json(users);
        })
        .catch(err => {
            
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});


router.post('/post',(req, res) => {
    const newUsers = new UserModel(req.body)
    newUsers.save()
        .then(response => console.log(response))
        .catch(err => console.log(err))
    res.send("User post page")
})

router.get('/get/:email',(req,res) => {
    console.log(req.params.email)
    UserModel.find({ email:req.params.email })
        .then(response => res.send(response))
        .catch(err => console.log(err))
    console.log("get the page ")
})

// router.put('/update/:id',(req,res)=>{
//     UserModel.findByIdAndUpdate(req.params.id,req.body)
//     .then(response=>res.send(response))
//       .catch(err=>console.log(err))
//       res.send("page was update")

//   })

//   router.delete('/delete/:id',(req,res)=>{
//       UserModel.findByIdAndDelete(req.params.id)
//       .then(response=>console.log(response))
//       .catch(err=>console.log(err))
//       res.send("page was delete")

//   })

module.exports=router