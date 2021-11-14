//IMPORT - FROM MODEL
const Food = require('../models/food.model');

//CREATE THE FUNCTION - TO SAVE THE FOODS IN THE DATABASE
const createFood = async(req, res) => {
    if(req.body) {
        const food = new Food(req.body);
        //save
        food.save()
        .then(data => {
            //200/201 = SUCCESS STATUS
            res.status(200).send({data:data});
        })
         .catch(error => {
            res.status(500).send({ error: error.message});
        });
    }
}

//FUNCTION - GET THE FOODS
const getAllFoods = async(req,res) => {
    await Food.find({})
    .then(data => {
        //200/201 = SUCCESS STATUS
        res.status(200).send({data:data});
    })
     .catch(error => {
        res.status(500).send({ error: error.message});
    });
}

//FUNCTION - GET ALL THE FOOD DETAILS
const getFoodDetails = async (req, res) => {
    if (req.params && req.params.id) {
        const food = await Food.findById(req.params.id)
            .then(data => {
                res.status(200).send({data: data});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

//CALCULATION
const calculatePayment  = async (req, res) => {
    if (req.params && req.params.id) {
        const foods = await Food.findById(req.params.id)
      let totalAmount = 0;
      if (foods.length > 0) {
        foods.map((food) => {
          totalAmount += (food.amount * food.size);
          console.log(totalAmount)
        });
      }
      res.status(200).send({ totalAmount: totalAmount });
    }
  }

//EXPORT
module.exports = {
    createFood,
    getAllFoods,
    getFoodDetails,
    calculatePayment
};
