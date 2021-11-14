//IMPORT - FROM MODEL
const Category = require('../models/category.model');

//CREATE THE FUNCTION - TO SAVE THE CATEGORIES IN THE DATABASE
const createCategory = async(req, res) => {
    if(req.body) {
        const category = new Category(req.body);
        //SAVE - RETURNS A PROMISE
        //AWAIT
        await category.save()
        .then(data => {
            //200/201 = SUCCESS STATUS
            res.status(200).send({data:data});
        })
         .catch(error => {
            res.status(500).send({ error: error.message});
        });
    }
}

//CREATE THE FUNCTION - TO GET ALL THE CATEGORIES
const getAllCategories = async(req,res) => {
    await Category.find({}).populate('foods', 'code name amount size')
    .then(data => {
        //200/201 = SUCCESS STATUS
        res.status(200).send({data:data});
    })
     .catch(error => {
        res.status(500).send({ error: error.message});
    });
}

//FUNCTION - GET ALL THE CATEGORY DETAILS
const getCategoryDetails = async (req, res) => {
    if (req.params && req.params.id) {
        const category = await Category.findById(req.params.id)
            .then(data => {
                res.status(200).send({data: data});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}


//CREATE THE FUNCTION - RETURN THE FOODS WHEN THE CATEGORY IS GIVEN
const getFoodsForCategory = async(req, res) => {
    if(req.params && req.params.id) {
        await Category.findById(req.params.id)
        .populate('foods', 'code name amount size')
        .then(data => {
            //200/201 = SUCCESS STATUS
            res.status(200).send({foods:data.foods});
        })
        .catch(error => {
            res.status(500).send({ error: error.message});
        });

    }
}


//EXPORT
module.exports = {
    createCategory,
    getAllCategories,
    getCategoryDetails,
    getFoodsForCategory
};
