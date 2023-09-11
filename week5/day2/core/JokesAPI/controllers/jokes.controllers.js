const { JokeSchema } = require('../models/jokes.models')

// read all 
module.exports.findAll = (req, res) => {
    JokeSchema.find()
        .then(jokes => res.json({ jokes }))
        .catch(err => res.json({ err }))
}

// get One by id 

module.exports.findOnebyId = (req, res) => {
    const { params } = req
    JokeSchema.findOne({ _id: params._id })
        .then((joke) => {
            res.json({ joke })
        })
        .catch(err => res.status(400).json({ err }))
}

// create a new joke 

module.exports.createJoke = (req, res) => {
    JokeSchema.create(req.body)
        .then(createJoke => {
            console.log(createJoke)
            res.status(200).json({ createJoke })
        })
        .catch(err => res.status(400).json({ err }))
}

// update a joke 

module.exports.updateJoke = (req, res) => {
    const { params } = req
    JokeSchema.findOneAndUpdate(
        { _id: params._id },
        req.body,
        {
            new: true,
            runValidators: true
        })
        .then((updatedJoke) => {
            res.json({ updatedJoke })
        })
        .catch((err) => res.status(400).json({ err }))
}

// delete a joke

module.exports.deleteJoke = (req, res) => {
    const { params } = req
    JokeSchema.findOneAndDelete({ _id: params._id })
        .then(deletedJoke => {
            res.json({ deletedJoke })
        })
        .catch(err => res.status(400).json({ err }))
}