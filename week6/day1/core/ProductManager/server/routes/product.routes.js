const productControllers = require('../controllers/product.controllers')

module.exports = (app) => {
    app.post('/api/product',productControllers.createProduct)
}