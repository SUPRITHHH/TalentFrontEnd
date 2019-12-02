const express=require('express');

const app=express();
const cors = require('cors')


const requirementRoutes=require('./Routes/requirement');
 
const bodyParser = require('body-parser');
const mongoose=require('mongoose')
let mongodbURI = "mongodb://localhost:27017/myOwnProject3";




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());





app.use(requirementRoutes);
 

mongoose.connect(mongodbURI, { useNewUrlParser: true }).then(res => {    
   
        console.log("mongodb connected successfully");
        app.listen(4000)
        console.log("app is listening to port number 4000");
            
}).catch(err => {
    console.log(err);
});

module.exports = app;