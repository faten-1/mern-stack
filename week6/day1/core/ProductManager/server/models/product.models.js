const {mongoose} = require('mongoose');

const Product = new mongoose.Schema({
    title : {
        type : String ,
        required : [true,'the title is required'],
        minLength : [3,'Title must have at least 3 characters' ]
    } ,
    price : {
        type : Number,
        required : [true,'the price is required']
    },
    description : { 
        type : String ,
        required : [true,'the description is required'],
        minLength : [10,'Description must have at least 10 characters ' ]
    }

}, {
    timestamps : true
})

module.exports.productSchema = mongoose.model('productSchema',Product )