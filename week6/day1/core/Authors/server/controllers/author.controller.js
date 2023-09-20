const { authorSchema } = require('../models/author.models')

// CRUD 

// create the author 

module.exports.createAuthor = (req, res) => {
    authorSchema.create(req.body)
        .then((newAuthor) => {
            console.log(newAuthor)
            res.status(200).json(newAuthor)
        })
        .catch((err) => res.status(400).json(err))
}


// display all  products 

module.exports.displayAuthors = (req, res) => {
    authorSchema.find()
        .then((allAuthors) => {
            res.status(200).json({ allAuthors })
        })
        .catch((err) => res.status(400).json(err))
}

// display one author by id 

module.exports.displayOneAuthor = (req, res) => {
    authorSchema.findOne({ _id: req.params.id })
        .then((author) => res.status(200).json(author))
        .catch((err) => res.status(400).json(err))
}


// update one author 

module.exports.updateOneAuthor = (req, res) => {
    authorSchema.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {new: true,runValidators : true}
    )
    .then ((updatedAuthor) => {
        res.json({updatedAuthor: updatedAuthor})
    })
    .catch((err) => res.status(400).json(err))
}

// delete 
module.exports.deleteAuthor = (req, res) => {
    authorSchema.findByIdAndDelete(req.params.id)
        .then(result => { res.json(result) })
        .catch(err => { res.status(400).json(err) })
}