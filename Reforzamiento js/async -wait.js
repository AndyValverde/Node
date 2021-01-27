/**
 * async await
 */

 let getNombre = async() => {
     return `Andrea`;
 };
 /**
  * let getName = () =>{
     return new Promise((resolve,reject)=>{
        resolve(`Andy`);
     });
 }
 */
//error personalizado
let getName = async() => {
    throw new Error();
    
};
getName().then(nombre => console.log(nombre)).catch(err => console.log(err));
 //este como es async regresar promesa
 console.log(getNombre());
 //este si regresa el andy
 getNombre().then(nombre => console.log(nombre));
 //////////////////////         await       ///////////////////////
 let saludo = () =>{//promesa
    return new Promise((resolve,reject)=>{
      setTimeout(()=>
      {
          resolve(`Andrea`);
      },3000);
    });
 }
 //saludo
 let saludar = async() =>{
     //llama la promesa y espera
     let nombre =await saludo();
     return `Hola ${nombre}`;
 }
//llamar el saludo
 saludar().then(sal => console.log(sal));