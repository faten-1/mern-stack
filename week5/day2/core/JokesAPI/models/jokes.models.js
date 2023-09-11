const {mongoose} = require('mongoose')

const Joke = new mongoose.Schema ( {
    setup : 
    {
        type : String ,
        required : true
    },
    punchline : 
    {
        type : String,
        required : true
    },
    
},{
    timestamps : true}
    )

module.exports.JokeSchema = mongoose.model('JokeSchema', Joke)