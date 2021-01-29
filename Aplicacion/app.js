const argv = require('yargs').argv;

console.log(argv);

const commando = argv._[0];
switch(commando){
    case 'crear':
        console.log('Crear una tarea');
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