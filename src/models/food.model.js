//IMPORT MONGOOSE PACKAGE
const mongoose = require('mongoose');

//MODEL CLASS SCHEMA
const FoodSchema = new mongoose.Schema({
    code: {type:String, required:true, trim:true},
    name: {type:String, required:true, trim:true},
    amount: {type:Number, required:true},
    size: {type:Number, required:true},

    //MANY TO MANY RELATIONSHIP - GIVE REFERENCE TO CATEGORY COLLECTION
    categories: [{type: mongoose.Schema.Types.ObjectId, required:false, ref:'categories'}]
});

//SAVE TO THE DATABASE
const Food = mongoose.model('foods', FoodSchema);

//EXPORT - IMPORTED IN THE CONTROLLER
module.exports = Food;