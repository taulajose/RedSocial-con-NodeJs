const express = require('express');
const config = require('./server/config');
const app = config(express());

//ejecuta el archivo database
require('./database');

//ejecuta el servidor 
app.listen(app.get('port'),()=>{
    console.log('Servidor funcionando en puerto', app.get('port'))
});