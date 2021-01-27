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

let getSalario = (empleado) =>{
    
       let salario = salarios.find(empleadoSalario => {
           return empleadoSalario.id === empleado.id;
       })
       if (!salario){
           throw new Error(`no tiene salario`);
       }
       else{
           
           return ({
               nombre: empleado.nombre,
               salario: salario.salario
           });
       }
   }

   let getEmpleado = (id) => {
    //resolve and reject pueden ser otros pero por convención
    
        let empleado = empleados.find(empleado =>{
            return empleado.id === id;
        })
        if(!empleado){
            throw new Error(`no esta ese empleado ${id}`);
        }else{
            return empleado;
        }
   
}

let getInfo = async(id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);
    return `${salario.nombre} tiene salario de $ ${salario.salario}`
}
//reduccción de la promesa
getInfo(1).then(mensaje => console.log(mensaje)).catch(err => console.log(err));

