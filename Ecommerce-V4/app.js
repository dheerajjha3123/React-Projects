const express=require("express");
const app= express(); // Instace
const path=require('path')

const mongoose = require('mongoose')
const seedDB=require('./seed')
const productRoutes=require('./routes/product')
const methodOverride = require('method-override')
const reviewRoutes=require('./routes/review')
const flash = require('connect-flash');
const session = require('express-session')


let configSession ={
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}

mongoose.connect('mongodb://localhost:27017/Ecommerce') // return a promise
.then(()=>{console.log('DB Connected')})
.catch((err)=>{console.log('error',err)})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public'))); // form data body parser

app.use(express.json());
app.use(express.urlencoded({extended:true})) // form data
app.use(methodOverride('_method'))


app.use(session(configSession));
app.use(flash());



app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    next()
})

// seedDB()

app.use(productRoutes);
app.use(reviewRoutes)


const PORT=8080
app.listen(PORT ,()=>{
    console.log(`Sever conneted at ${PORT}`)
})

// 1. Basic Server
// 2. Mongoose Connection
// 3. model -> seed data
// 4. routes -> Views
// 5. rating schema -> product schema change