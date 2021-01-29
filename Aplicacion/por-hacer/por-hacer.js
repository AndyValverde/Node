const fs = require('fs');
// puede estar vacio porque se inicializa más adelante
let listadoPorHacer;
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
    getLista
}