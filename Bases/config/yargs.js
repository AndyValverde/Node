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

module.exports = {
    argsv
}