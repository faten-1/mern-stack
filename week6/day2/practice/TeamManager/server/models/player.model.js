const { mongoose } = require('mongoose');

const gameStatusEnum = ["Playing", "Not Playing", "Undecided"];
const gameStatusDefault = "Undecided";

const Player = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'the name is required'],
        minLength: [2, 'Player name must have at least 2 characters']
    },
    position: {
        type: String
    },
    gameStatus: {
        gameOne: {
            type: String,
            enum: gameStatusEnum,
            default: gameStatusDefault
        },
        gameTwo: {
            type: String,
            enum: gameStatusEnum,
            default: gameStatusDefault
        },
        gameThree: {
            type: String,
            enum: gameStatusEnum,
            default: gameStatusDefault
        }
    }
}, {
    timestamps: true
})

module.exports.playerSchema = mongoose.model('playerSchema', Player)