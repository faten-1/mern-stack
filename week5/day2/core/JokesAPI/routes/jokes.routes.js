const JokesControllers = require ("../controllers/jokes.controllers")

console.log (JokesControllers)


module.exports = (app) => {
    app.get("/api/jokes",JokesControllers.findAll)
    app.post("/api/jokes",JokesControllers.createJoke)
    app.get("/api/jokes/:_id",JokesControllers.findOnebyId)
    app.put('/api/jokes/:_id',JokesControllers.updateJoke)
    app.delete('/api/jokes/:_id',JokesControllers.deleteJoke)

}
