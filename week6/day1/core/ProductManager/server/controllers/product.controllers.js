const {productSchema} = require ('../models/product.models')

// CRUD 

// create the product 

module.exports.createProduct = (req,res) => {
    productSchema.create(req.body)
    .then ( (newProduct) => {
        console.log(newProduct)
        res.status(200).json(newProduct)
    })
    .catch((err)=> res.status(400).json(err))
}