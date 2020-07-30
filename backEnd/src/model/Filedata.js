const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/FileDb');
const Schema = mongoose.Schema;

var NewFileSchema = new Schema({
    fileName : {type:String,unique:true},
    fileImage : String,
    fileDescription : String
});

var Filedata = mongoose.model('file',NewFileSchema,'filedata');

module.exports = Filedata;