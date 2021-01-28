//required nuestro
//{} es para destructuración!!!
let {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
//cuando ponga "listar" va a hacer referencia a este yarg
// el mensaje saldra en el help
let argsv = require('yargs').command('listar','mensaje',{
    base: {
        demand: true,//forsozo
        alias: 'b'
    },
    limite : { 
        alias: 'l',
        default: 10 // valor por defecto
    }
}).command('crear','mensaje',{
    base: {
        demand: true,//forsozo
        alias: 'b'
    },
    limite : { 
        alias: 'l',
        default: 10 // valor por defecto
    }
}).help().argv;


let comando = argsv._[0];
console.log(argsv._[0]);
switch(comando){
    case 'listar':
        listarTabla(argsv.base,argsv.limite).then(tabla => console.log(tabla)).catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argsv.base,argsv.limite).then(archivo => {
            console.log(archivo);
        }).catch(err => console.log(err));
        break;
    default:
        console.log('No reconocido');
        
}

console.log(argsv.base);
console.log(argsv.limite);
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