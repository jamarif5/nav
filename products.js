const  Mongoose  = require('mongoose');

const productSchema =new Mongoose.Schema({
name:String,
price:Number,
brand:String,
cetagory:String



})
 module.exports =Mongoose.model('products',productSchema)
