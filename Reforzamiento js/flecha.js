//funcion normal
function sumar (a,b){
    return a+b;
}

console.log(sumar(5,5));
//funcion de flecha
let suma = (a,b) => {
    return a+b
}
console.log(suma(5,5));

//reduccion de una funcion de flecha de una sola linea
let sum = (a,b)=> a+b;
console.log(sum(5,5));
 //cuando solo se tiene un argumento 
 let hola = name => `${name}`;
 console.log(`${hola('Andrea')}`);