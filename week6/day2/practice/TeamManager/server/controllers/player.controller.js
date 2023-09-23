const { playerSchema } = require('../models/player.model')

// CRUD 

// create the player

module.exports.createPlayer = (req, res) => {
    playerSchema.create(req.body)
        .then((newPlayer) => {
            console.log(newPlayer)
            res.status(200).json(newPlayer)
        })
        .catch((err) => res.status(400).json(err))
}


// display all  products 

module.exports.displayPlayer = (req, res) => {
    playerSchema.find()
        .then((allPlayers) => {
            res.status(200).json({ allPlayers })
        })
        .catch((err) => res.status(400).json(err))
}

// display one author by id 

module.exports.displayOnePlayer = (req, res) => {
    playerSchema.findOne({ _id: req.params.id })
        .then((player) => res.status(200).json(player))
        .catch((err) => res.status(400).json(err))
}


// update one author 

module.exports.updateOnePlayer = (req, res) => {
    playerSchema.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {new: true,runValidators : true}
    )
    .then ((updatedPlayer) => {
        res.json({updatedPlayer: updatedPlayer})
    })
    .catch((err) => res.status(400).json(err))
}

// delete 
module.exports.deletePlayer = (req, res) => {
    playerSchema.findByIdAndDelete(req.params.id)
        .then(result => { res.json(result) })
        .catch(err => { res.status(400).json(err) })
}