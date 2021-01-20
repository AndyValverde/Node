let nombre = 'detpull';
let real = 'rex';

let nombreC = nombre + " " + real;
let nombreT = `${nombre} ${real}`;
//su contenido y su identidad son iguales
console.log(nombreC === nombreT);

function getNombre(){
    //regresa un string
    return `${nombre} ${real}`;
}
//asi imprime la funcion
console.log(`${getNombre}`);
//asi imprime el return
console.log(`${getNombre()}`);

