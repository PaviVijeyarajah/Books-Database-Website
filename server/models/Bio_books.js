let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    Name:String,
    Author:String,
    Published:String,
    Description:String,
    Price: Number
},
{
    collection:"item"
});
module.exports = mongoose.model('Book',bookModel);
