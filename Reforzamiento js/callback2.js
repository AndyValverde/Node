//arreglo de objetos
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

//getEmpleado(1,(err,empleado)=>console.log(empleado));

let getSalario = (empleado,callback) => {
    let empl = salarios.find(empleadoFind => {
        return empleadoFind.id === empleado.id});
    if(!empl){
        callback(`ese empleado ${empleado} no tiene salario`);
    }
    else{
    callback(null,{
        nombre: empleado.nombre,
        salario: empl.salario
    
    });}

}

getSalario({
    id:1,
    nombre: 'Andrea'
},(err,empleado)=>{
    if(err){
        return console.log(err);
    }
   console.log(empleado)
});