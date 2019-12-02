const Requirement=require('../Models/requirement');

exports.postRequirement=(req,res,next)=>{
     new Requirement({
        client:req.body.client,
        skill:req.body.skill,
        yoe:req.body.yoe,
        location:req.body.location,
        nop:req.body.nop,
        odate:req.body.odate,
        cdate:req.body.cdate,
        role:req.body.role,
        rate:req.body.rate,
        contact:req.body.contact,
        jd:req.body.jd,
    }).save().then(data =>{
       return res.json(data);
    }).catch(err => {
        console.log(err);
    
    })
    
}
