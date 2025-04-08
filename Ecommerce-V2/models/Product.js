const mongoose=require('mongoose'); // Object


// Schema
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String,
        trim:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]

})

// Model/collection -> Js class -> Objects/document
// Model -> sigular & capital letter

let Product=mongoose.model('Product',productSchema);

module.exports=Product;