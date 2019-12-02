const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let reqSchema=new Schema({
    client:{
        type:String
    },
    skill:{
        type:String
    },
    yoe:{
        type:Number
    },
    location:{
        type:String
    },
    nop:{
        type:Number
    },
    odate:{
        type:Date
    },
    cdate:{
        type:Date
    },
    role:{
        type:String
    },
    rate:{
        type:String
    },
    contact:{
        type:String
    },
    jd:{
        type:String
    }
   
})

module.exports=mongoose.model('Requirement',reqSchema);