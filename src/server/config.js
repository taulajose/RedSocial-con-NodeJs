const path = require('path');
const exphbs = require('express-handlebars');

//librerias de middlewars que tuve que instalar al inicio
const morgan = require('morgan');
const multer = require ('multer');

//esto lo requiero no para generar servidor sino para importar los middlewares
const express = require('express')
const errorHandler = require('errorhandler')

const routes = require('../routes/index')


module.exports = app=>{
    //settings

    app.set('port', process.env.PORT || 3000);

    //-----------------------------

    //configuracion del motor de plantillas handlebars 

    //le digo donde esta la carpeta views
    //para estorequiero y uso path 
    app.set('views',path.join(__dirname,'../views'));

    app.engine('hbs',exphbs({
        //cual es el archivo que por defecto va a tomar para renderizar
        //luego creamos ese archivo que quedara como plantilla

        defaultLayout:'main',
        //partes de las vistas, pedazos de html para reutilizar
        //donde esta esa carpeta?
        partialsDir:path.join(app.get('views'),'partials'),
        laoyutDir: path.join(app.get('views'),'layouts'),
        //esto es como le voy a poner a la extension de mis archivos de handlebars
        extname:'.hbs',

        //este archivo esta en server/helpers
        helpers: require('./helpers')
    }))
    //establecemos el motor de plantillas handlebars que es hbs loq ue creamos arriba
    app.set('view engine', '.hbs')

    //------------------------


    //middlewares
    app.use(morgan('dev'));

    //a traves de multer cuando me envien una imagen la voy a poner en la carpeta de upload/temp
    //y el single es que pueden enviar solamente una imagen sino lo pongo puede mandar muchas
    //el image del single es el input del formulario con name=image
    app.use(multer({dest: path.join(__dirname,'../public/upload/temp')}).single('image'))


    //middlewares que vienen con express
    app.use(express.urlencoded({extended:false}));
    //le digo que acepte jsons
    app.use(express.json())


    //----------------------------

    //routes

    // requiero mas arriba el archivo routes que tiene una funcion
    //en donde le paso app para en routes hacer el ruteo
    routes(app)


    //----------------------------

    //static files 
    //le decimos donde esta la carpeta public para que pueda ser accedido
    //desde el navegador si ponemos un archivo txt dentro de public/img y luego 
    //lo pedimos desde el navegador lo va a renderizar

    app.use('/public',express.static(path.join(__dirname,'../public')))

    //-----------------------------

    //errorhandlers

    //con env chequeamos si estamos en modo desarrollo o produccion
    //si estamos en desarrollo va a usar los errores 
    if('development' === app.get('env')){
        app.use(errorHandler);
    }
    return app;
}