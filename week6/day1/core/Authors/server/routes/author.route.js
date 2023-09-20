const authorControllers = require('../controllers/author.controller')

module.exports = (app) => {
    app.post('/api/author/new', authorControllers.createAuthor)
    app.get('/api/author/list', authorControllers.displayAuthors)
    app.get('/api/author/:id', authorControllers.displayOneAuthor);
    app.put('/api/author/:id/edit', authorControllers.updateOneAuthor)
    app.delete('/api/author/:id', authorControllers.deleteAuthor)
}


