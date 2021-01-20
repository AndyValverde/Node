var nombre = 'wolwerine';

if(true){
    var nombre ='Magneto'
}
console.log(`${nombre}`);
let nombre1 = 'wolwerine';
//magneto no se utiliza
if(true){
    let nombre1 ='Magneto'
}
/**
 * esto marcaria error
 * let nombre1 = 'wolwerine2';
 */

console.log(`${nombre1}`);

for(var x=0; x<=5;x++){
    console.log(`x ${x}`);
}
//da 6 porque ya esta siendo utilizada en el for
console.log(`x ${x}`);

for(var y=0; y<=5;y++){
    console.log(`y ${y}`);
}
//sale undefined porque el el valor se quedo en for
console.log(`y ${y}`);