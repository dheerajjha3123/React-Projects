const mongoose=require('mongoose'); // Object


// Schema
const reviewSchema=new mongoose.Schema({
    rating:{
        type:Number,
        min:0,
        max:5
    },
    comment:{
        type:String,
        trim:true
    }

},{timestamps:true})

// Model/collection -> Js class -> Objects/document
// Model -> sigular & capital letter

let Product=mongoose.model('Review',reviewSchema);

module.exports=Product;