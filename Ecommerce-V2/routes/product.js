const express=require("express");
const Product = require("../models/Product");
const Review = require("../models/Review");

const router =express.Router();


// read
router.get('/products', async(req,res)=>{
    let products = await Product.find({});
    res.render('index',{products})
});

// new form

router.get('/product/new',(req,res)=>{
    res.render('new')
})

// actually adding

router.post('/products',async(req,res)=>{
    let {name, img, price,desc}=req.body; //by default undefined
    await Product.create({name, img, price,desc}); // automatically db save
    res.redirect('/products')
})

// show particular product

router.get('/products/:id',async(req,res)=>{
    let {id}=req.params;
    let foundProduct=await Product.findById(id).populate('reviews');
    res.render('show',{foundProduct});
})

// show edit forms

router.get('/products/:id/edit',async(req,res)=>{
    let {id}=req.params;
    let foundProduct=await Product.findById(id);
    res.render('edit',{foundProduct})

})

// Actually changing the product

router.patch('/products/:id',async(req,res)=>{
    let {id}=req.params;
    let {name, img, price,desc}=req.body; 
    await Product.findByIdAndUpdate(id,{name, img, price,desc})
    res.redirect('/products')


})

// deleting

router.delete('/products/:id',async(req,res)=>{
    let {id}=req.params;
    let foundProduct=await Product.findById(id);
    for(let ids of foundProduct.reviews){
        await Review.findByIdAndDelete(ids)
    }
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})

module.exports=router;