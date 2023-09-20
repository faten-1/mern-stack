const productControllers = require('../controllers/product.controllers')

module.exports = (app) => {
    app.post('/api/product', productControllers.createProduct)
    app.get('/api/product/list', productControllers.displayProducts)
    app.get('/api/product/:id', productControllers.displayOneProduct);
    app.put('/api/product/:id', productControllers.updateOneProduct)
    app.delete('/api/product/:id', productControllers.deleteProduct)
}


