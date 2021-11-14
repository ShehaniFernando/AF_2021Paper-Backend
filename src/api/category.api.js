//API ENDPOINT
//IMPORT
const express = require('express');
const router = express.Router();
const controller = require('../controllers/category.controller');

//EXPORT
module.exports = function(){
    router.post('/create', controller.createCategory);
    router.get('/', controller.getAllCategories);
    router.get('/v2/:id', controller.getCategoryDetails);
    router.get('/:id', controller.getFoodsForCategory); 
    return router;
}

