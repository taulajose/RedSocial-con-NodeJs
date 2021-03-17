const mongoose = require('mongoose');
const {database} = require('./keys')

//requiere la uri del archivo keys que es la direccion del db
mongoose.connect(database.URI,{
    useNewUrlParser:true
})
    .then(db => console.log('DB conectada'))
    .catch(err=> console.error(err));