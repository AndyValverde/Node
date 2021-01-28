//required nuestro
//{} es para destructuración!!!
let {crearArchivo} = require('./multiplicar/multiplicar');
// para recuperar el argumento
//este regresa el arreglo
let argumentos = process.argv;
//regresa el valor del primer argumento
let parametro = argumentos[2];

// esto es suponiendo que va a ser algo como base=6 y este va a separar cada que encuentre = y va a tomar la segunda posición por eso el [1]
let base = parametro.split('=')[1];

crearArchivo(base).then(archivo => {
    console.log(archivo);
}).catch(err => console.log(err));

// La entrada node .\app.js --base=6