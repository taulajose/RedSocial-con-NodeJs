const path = require ('path');
const {randomNumber} = require('../helpers/libs');
const fs= require('fs-extra');
const {Image} = require('../models/index')
const ctrl = {}
//controlador para mostrar imagenes
ctrl.index = (req,res)=>{
    res.send("pagina de imagen")
}
//controlador para subir imagen
ctrl.create = async (req,res)=>{
    randomNumber();
    const imgUrl = randomNumber();
    console.log(imgUrl)
    //req.file es toda la informacion del archivo
    //console.log(req.file)
    const ext = path.extname(req.file.originalname).toLowerCase();
    const imageTempPath = req.file.path;
    //la ruta a donde quiero que se guarde la imagen luego del temp
    const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`)
    
    if (ext==='.png'|| ext ==='.jpg'|| ext==='.jpeg'||ext===',.gif'){
        //la funcion rename del modulo importado filesystem mueve un archivo de una carpeta a otra
        // y funciona asincronamente
        await fs.rename(imageTempPath,targetPath);

        const newImg = new Image({
            title:req.body.title,
            filename: imgUrl + ext,
            description: req.body.description,
        });
        //para guardarlo en la base de datos
        const imageSaved = await newImg.save();
        res.send("Guardado en la base de datos")
    }else{
        //elimina la imagen de la carpeta temporal
        //si no cumple con los formatos
       await fs.unlink(imageTempPath)
       res.status(500).json({error:'Formato no permitido'});
    }
    res.send("Works")
}
//controlador para dar like a foto
ctrl.like = (req,res)=>{
    res.send("like imagen")
}
//controlador para comentar imagen
ctrl.comment = (req,res)=>{
    res.send("comment imagen")
}
//controlador para eliminar imagen
ctrl.remove = (req,res)=>{
    res.send("remove imagen")
}


module.exports = ctrl;