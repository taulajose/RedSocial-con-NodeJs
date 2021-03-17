
//requerimos express para despues usar Router
// que permite crear un objeto que permite definir url o rutas del servidor

const express = require('express');
const router = express.Router();

const home = require('../controllers/home');
const image = require('../controllers/image');


//recibo como parametro app y realizo el ruteo con los verbos http

module.exports = app =>{

    /*el modelo de peticion es asi 
    router.get('/',(req,res)=>{
        //aca le digo que quiero que haga cuando el usuario este en /
        res.send('Index page');
    });*/

    //pero utilizando el modelo vista controlador que sirve
    //cuando nuestra aplicacion crece mucho. cortamos la funcion
    // que esta despues de la ruta que vamos a llamar a eso 
    //el controlador y lo mandamos a otro al archivo js de controllers
    //para luego requerir esa funcion desde aca. 
    // donde .index es un metodo  que creamos en el objeto de controllers home
    //Quedaria asi:

    router.get('/',home.index);
    router.get('/images/:image_id',image.index);
    router.post('/images',image.create);
    router.post('/images/:image_id/like',image.like);
    router.post('/images/:image_id/comment',image.comment);
    router.delete('/images/:image_id',image.remove);
    app.use(router)
}