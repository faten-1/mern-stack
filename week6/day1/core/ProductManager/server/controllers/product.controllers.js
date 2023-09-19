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


// display all  products 

module.exports.displayProducts = (req,res) => {
    productSchema.find()
    .then((allProducts) => {
        res.status(200).json({allProducts})
    })
    .catch((err)=> res.status(400).json(err))
}

// display one product by id 

module.exports.displayOneProduct = (req, res) => {
    productSchema.findOne({_id:req.params.id})
    .then((product)=> res.status(200).json(product))
    .catch((err)=> res.status(400).json(err))
}

