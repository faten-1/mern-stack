const playerControllers = require('../controllers/player.controller')

module.exports = (app) => {
    app.post('/api/player/new', playerControllers.createPlayer)
    app.get('/api/player/list', playerControllers.displayPlayer)
    app.get('/api/player/:id', playerControllers.displayOnePlayer);
    app.put('/api/player/:id/edit', playerControllers.updateOnePlayer)
    app.delete('/api/player/:id', playerControllers.deletePlayer)
}


