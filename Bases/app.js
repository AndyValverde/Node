//require
const fs = require('fs');
//datos
let base = 6;
let data ='';
for(let i = 1; i<= 10; i++){
    //esto guarda las multiplicaciones
data += (`${base} * ${i} = ${base*i} \n`);
}
/**
 * ruta:tablas/Prueba.txt
 * fs asi llame la variable
 * lo ultimo de err es callback
 */
fs.writeFile(`tablas/PruebaBase${base}.txt`, data, (err) => {
    //si hay un error
    if (err) throw err;
    //sino sigue
    console.log(`El archivo fue creado de la tabla ${base}`);
  });