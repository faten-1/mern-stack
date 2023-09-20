const {mongoose} = require('mongoose');

const Author = new mongoose.Schema({
    name : {
        type : String ,
        required : [true,'the title is required'],
        minLength : [3,'AUthor name must have at least 3 characters' ]
    } ,

}, {
    timestamps : true
})

module.exports.authorSchema = mongoose.model('authorSchema',Author )