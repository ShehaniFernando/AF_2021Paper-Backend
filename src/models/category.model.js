//IMPORT MONGOOSE PACKAGE
const mongoose = require('mongoose');

//MODEL CLASS SCHEMA
const CategorySchema = new mongoose.Schema({
    category: {type:String, required:true, trim:true},
    description: {type:String, required:true, trim:true},

    //MANY TO MANY RELATIONSHIP - GIVE REFERENCE TO FOOD COLLECTION
    foods: [{type: mongoose.Schema.Types.ObjectId, required:false, ref:'foods'}]
});

//SAVE TO THE DATABASE
const Category = mongoose.model('categories', CategorySchema);

//EXPORT - IMPORTED IN THE CONTROLLER
module.exports = Category;