//informacion relacionada a la imagen

const mongoose = require('mongoose');
const path = require('path')
const{Schema} = mongoose;

const ImageSchema = new Schema({
    title:{type:String},
    description:{type:String},
    filename:{type:String},
    views:{type:Number,default:0},
    likes:{type:Number,default:0},
    timestamp:{type:Date,default:Date.now}
});

//esta propiedad no se almacena en la base de datos
ImageSchema.virtual('uniqueId')
    .get(function(){
        //con el path extname agarramos el filename que viene en el objeto 
        //y agarra la extension del archivo y lo reemplaza por ''
        return this.filename.replace(path.extname(this.filename),'')
    })
//con esto convierto en un modelo para reutilizar
//de nombre image que puede ser cualquiera y la exporto
module.exports = mongoose.model('image',ImageSchema)