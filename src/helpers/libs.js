const helpers = {};

helpers.randomNumber = ()=>{
    const posible = 'abcdefghijklmtwxyz0123456789';
    let randomNumber = 0;
    for(let i=0; i<6;i++){
        
        //crea un numero aleatorio que este dentro de la longitud de posible
        
       randomNumber+= posible.charAt(Math.floor(Math.random() * posible.length))
    }
    return randomNumber;
}

module.exports = helpers;