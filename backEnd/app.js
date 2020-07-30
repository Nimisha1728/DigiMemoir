const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
var bodyparser = require('body-parser');
const filedata = require('./src/model/Filedata');
const api = require('./src/routes/api');
const User = require('./src/model/user');
const jwt = require('jsonwebtoken')
const multer = require('multer');

var app = new express;
app.use(cors());
app.use(bodyparser.json())
app.use('/api',api)

// var storage = multer.diskStorage({
//     destination: function(req,file,cb){
//       cb(null,'../assets/img')  
//     },
//     filename: function(req,file,cb){
//         cb(null,file.fielname+'-'+Date.now());
//     }
// })
// var upload = multer({storage : storage})


app.get('/folder',function(req,res){
    res.header("Access-Control-Allow-Origin","http://localhost:4200")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    filedata.find()
                 .then(function(folder){
                     res.send(folder);
                 });
});

app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var file={
        fileName : req.body.file.fileName,
        fileImage : req.body.file.fileImage,
        fileDescription : req.body.file.fileDescription
    }

    var file = new filedata(file);
    file.save();
});

app.post('/delete',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    console.log(req.body);
    var id = req.body.id;

    filedata.deleteOne({ _id:id })
    .then(function(folder){
        console.log(folder);
        res.send(folder);
    });
});

app.get('/edit/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    const id = req.params.id;
    filedata.findOne({ _id: id})
    .then(function(file){
        res.send(file);
    });
});

app.post('/update',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    var file={
        _id : req.body.file._id,
        fileName : req.body.file.fileName,
        fileImage : req.body.file.fileImage,
        fileDescription : req.body.fileDescription
    }

    filedata.findOne({ _id: file._id })
    .then(function(result){
        if(!result){
            return next(new Error('updation failed'));
        }
        else{
            var fileupdate = new filedata(file);
            console.log("updated"+result)
            console.log("updated"+fileupdate)
            filedata.findByIdAndUpdate(fileupdate._id, fileupdate, (er,updated) =>{
                console.log("updated"+updated);
            })
        }
    })
})

app.listen(3000,function(){
    console.log('listening to port 3000');
});
