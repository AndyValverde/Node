//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const {crear, getLista, actualizar} = require('./por-hacer/por-hacer');
const colors = require('colors');

console.log(argv);

const commando = argv._[0];
switch(commando){
    case 'crear':
        let porHacer = crear(argv.descripcion);
        console.log(porHacer);
        break;
    case 'listar':
        console.log('Listar las tareas');
        let lista = getLista();
        for(let tarea of lista){
            console.log("====== Tarea por Hacer =====".green);
            console.log(tarea.descripcion);
            console.log("Estado: ",tarea.completado);
            console.log("============================".green);
        }
        break;
    case 'actualizar':
        console.log('Actualizar una tarea');

        actualizar(argv.descripcion,argv.completado);
        break;
    default:
        console.log('Ese comando no existe');
}