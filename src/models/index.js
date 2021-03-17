//este archivo se crea para guardar en un objeto las direcciones
//de todos los modelos para que cuando los requerimos desde cualquier
//lugar solo requerimos este index y le indicamos mediante llaves
//que propiedad del objeto queremos y este luego va y requiere
//la ruta del modelo especifico

module.exports={
    Image: require('./image')
}