//un controlador es un objeto que contiene funciones

const ctrl = {}

//esta es la funcion que originalmente habiamos escrito en el index
// de rutas que lo trajimos aca para ordenar el codigo

ctrl.index = (req,res)=>{
    //aca le digo que  cuando el usuario este en /
    //renderize el archivo index 
    res.render('index');
};


module.exports = ctrl;

