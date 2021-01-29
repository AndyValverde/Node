//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const {crear} = require('./por-hacer/por-hacer');

console.log(argv);

const commando = argv._[0];
switch(commando){
    case 'crear':
        let porHacer = crear(argv.descripcion);
        console.log(porHacer);
        break;
    case 'listar':
        console.log('Listar las tareas');
        break;
    case 'actualizar':
        console.log('Actualizar una tarea');
        break;
    default:
        console.log('Ese comando no existe');
}