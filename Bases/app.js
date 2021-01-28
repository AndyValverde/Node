//required nuestro
//{} es para destructuración!!!
let {crearArchivo} = require('./multiplicar/multiplicar');
let base = 6;

crearArchivo(base).then(archivo => {
    console.log(archivo);
}).catch(err => console.log(err));