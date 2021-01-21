//un collback
setTimeout(() => console.log(`Hola mundo`)
,3000);

let usuarioById = (id, callback) => {
    let  usuario = {
        nombre : 'Andrea',
        // por ECS6 ya no es necesario id:id (osea decir que el las variables con el mismo nombre se le asiganra el valor con solo llamar al argumento )
        id
    }
    //funcion
    callback(usuario.id,usuario.nombre);
}

usuarioById(20,
    (name,usuario) =>{
        console.log(usuario);
});

// simulando que el id 20 no existe
let buscarUsuarioById = (id, callback) => {
    let  usuario = {
        nombre : 'Andrea',
        id
    }
    if(id === 20){
        callback("no existe");
    }else{
        callback(usuario);
    }
    
}
buscarUsuarioById(20,(usuario)=>{
    console.log(usuario);//dara no existe
});

//ahora con error

let buscarUsuarioById2 = (id, callback) => {
    let  usuario = {
        nombre : 'Andrea',
        id
    }
    if(id === 20){
        callback("no existe este usuario");
    }else{
        callback(null,usuario);
    }
    
}
buscarUsuarioById2(20,(err,usuario)=>{// mandara mensaje de error
    if(err){
        return console.log(err);
    }
    //console.log(usuario);
});

buscarUsuarioById2(15,(err,usuario)=>{//no va a mandar nada
    if(err){
        return console.log(err);
    }
    //console.log(usuario);
});

buscarUsuarioById2(15,(err,usuario)=>{//mostrara al usuario
    if(err){
        return console.log(err);
    }
    console.log(usuario);
});

///otra prueba
let pruebaCall = (uno, call,call2) =>{
    let one = uno;
    call(one);
    call2(one);
}

pruebaCall(1, (varUno)=>{//llamar al callback
    console.log(varUno);//call1
},(one)=>console.log(one));//call2