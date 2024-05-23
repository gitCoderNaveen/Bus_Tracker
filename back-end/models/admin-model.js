const mondoose= require('mongoose')

const userSchema= new mondoose.Schema({
    username:String,
    email:String,
    password:String
})

const UserModel=mondoose.model('admin',userSchema)

module.exports=UserModel