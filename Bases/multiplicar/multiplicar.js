//require
const fs = require('fs');
//datos
  //Promesa que va a ser llamada en otros archivos
  let crearArchivo = (base,limite) => {
      return new Promise((resolve,reject)=>{
          //Verifica si es un numero
        if(!Number(base)) {reject(`No es '${base}'un numero `)}
        else{
            let data ='';
            for(let i = 1; i<= limite; i++){
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
                if (err) reject(err);
                //sino 
                else resolve(`PruebaBase${base}.txt`);
            });
        }
        
      });
  }

  let listarTabla = (base,limite) => {
    return new Promise((resolve,reject) =>{
        if(!Number(base)) {reject(`No es '${base}'un numero `)}
        else{
            let data = '';
            for(let i=1;i<=limite;i++){
                data += (`${base} * ${i} = ${base*i} \n`);
            }
            resolve(data);
        }
    });
  }

  ///para que puedas exportar la funciones que quieras
module.exports = {
    //por ES6 se puede dejar asi pero porque tiene el mismo nombre sino crearArchivo : crearArchivo
    crearArchivo,
    listarTabla
}