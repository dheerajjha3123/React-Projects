const mongoose=require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name: 'iPhone 15 Pro',
        img: 'https://images.unsplash.com/photo-1688649593308-40dfbb552d00?q=80&w=500',
        price: 120000,
        desc: "Very Costly phone it is",
    },
    {
        name: 'MacBook Pro',
        img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=500',
        price: 130000,
        desc: 'This is a good machine',
    },
    {
        name: 'Moto',
        img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=500',
        price: 30000,
        desc: 'It’s a good phone',
    }
];



async function seedDB(){
    await Product.insertMany(products);
    console.log("DB Seeded")
}

module.exports = seedDB;