const express=require('express');
const app=express();
const path=require('path');


app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
// now for public folder
app.use(express.static(path.join(__dirname,'public')));


app.use('/',(req,res)=>{
    res.render('index')
})

const Port=8080
app.listen(Port,()=>{
    console.log(`Server Runnig at : ${Port}`)

    
})