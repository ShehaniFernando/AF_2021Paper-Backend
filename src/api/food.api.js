//API ENDPOINT
//IMPORT
const express = require('express');
const router = express.Router();
const controller = require('../controllers/food.controller');

//EXPORT
module.exports = function(){
    router.post('/create', controller.createFood);
    router.get('/', controller.getAllFoods);
    router.get('/:id', controller.getFoodDetails);
    router.get('/calculate/:id', controller.calculatePayment);
    return router;
}

