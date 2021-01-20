console.log(`Inicio del programa`);


setTimeout(function(){
    console.log(`Primer Timeout`);
},3000);
setTimeout(function(){
    console.log(`Primer Timeout`);
},0);
setTimeout(function(){
    console.log(`Primer Timeout`);
},0);

console.log(`Fin del programa`);
// la salid es
/**
 * Inicio
 * Fin
 * Segun
 * Tercer
 * Primero
 */