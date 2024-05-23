const mondoose = require('mongoose')

const userbus = new mondoose.Schema({

    busno:String,
    time:String,
    from:String,
    to:String
})
const userbus2 = new mondoose.Schema({
    busno:String,
    time:String,
    from:String,
    to:String
})
const userbus3 = new mondoose.Schema({
    busno:String,
    time:String,
    from:String,
    to:String
})

const Userbus = mondoose.model('userbus', userbus)
const Userbus2 = mondoose.model('Express', userbus2)
const Userbus3 = mondoose.model('SETC', userbus3)

module.exports=Userbus,Userbus2,Userbus3