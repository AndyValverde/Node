const fs = require('fs');
// puede estar vacio porque se inicializa más adelante
let listadoPorHacer = []; // le volvi a poner los [] ya que sin estos no me ayuda al auto completado
const guardarDB = () => {
    //combierte en formato json
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err) => {
        if (err) throw new Error(`No se pudo grabar `, err);
    });
}

const cargarDB = () => {
    try{
        //recupera un Json y en automatico lo convierte en objeto javascript
        listadoPorHacer = require('../db/data.json');
    }
    catch{
        listadoPorHacer = [];
    }
    
}

const getLista = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
    }else {
        console.log('esa actividad aun no ha sido agregada');
    }
    guardarDB();
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

module.exports = {
    crear,
    getLista,
    actualizar
}