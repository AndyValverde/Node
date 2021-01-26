let empleados = [
    //objeto uno
    {
        id:1,
        nombre: 'Andrea'
    },
    //objeto2
    {
        id: 2,
        nombre: 'Roberto'
    },
    //objeto3
    {
        id: 3,
        nombre: 'Ana'
    }
]

let salarios = [
    {
        id:1,
        salario: 1000 
    },
    {
        id:2,
        salario:2000
    }
]

/**
 * 
 * 
let getEmpleado = (id,callback)=>{
    let empleado = empleados.find(empleado =>{
        return empleado.id === id;
    })
    if(!empleado){
        callback(`no esta ese empleado`);
    }else{
        callback(null, empleado);
    }
}
 */

let getEmpleado = (id) => {
    //resolve and reject pueden ser otros pero por convención
    return new Promise((resolve, reject) => {
        let empleado = empleados.find(empleado =>{
            return empleado.id === id;
        })
        if(!empleado){
            reject(`no esta ese empleado ${id}`);
        }else{
            resolve(empleado);
        }
    })
}

getEmpleado(10).then(empleado =>{
    console.log("empleado",empleado);
    //este no muestra el valor sino solo tipo object
    console.log(`Empleado ${empleado}`);
//reject 
}, (error) => {
 console.log(error);
});


let getSalario = (empleado) =>{
 return new Promise((resolve, reject) => {
    let salario = salarios.find(empleadoSalario => {
        return empleadoSalario.id === empleado.id;
    })
    if (!salario){
        reject(`no tiene salario`);
    }
    else{
        
        resolve({
            nombre: empleado.nombre,
            salario: salario
        });
    }
 });
}

getEmpleado(3).then(empleado =>{
    console.log("empleado",empleado);
    getSalario(empleado).then(salario => {
        console.log(`El salario es `,salario.salario);
    },(err) => {
        
        console.log(err);
    });
}, (error) => {
 console.log(error);
});


// promesas anidadas (encadenadas
getEmpleado(10).then(empleado =>{
    return getSalario(empleado)
}).then(salario => {
    console.log(salario);
}).catch(err => {
        console.log(err);
    }
);