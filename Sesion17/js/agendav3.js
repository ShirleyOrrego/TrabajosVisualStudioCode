function actualizarDatos(){
    const registro = "";
    if (localStorage.length === 0){
        registro += '<li>Vacio</li>';
    }else{
        for (const i = 0; i <= localStorage.length - 1 ; i++){
            const key = localStorage.key(i);
            registro += '<li>' + '<span class="nom">' + key + '</span>' + 
                        '<span class="nom">' + localStorage.getItem(key) + '</span>' + 
                        '<span class="nom">' + localStorage.getItem(key) + '</span>' + '</li><br>';
        }
    }
    document.getElementById('contactos').innerHTML = registro;
}

function guardarDatos(){
    const nombre = document.getElementById("nombre").value;
    const movil = document.getElementById("movil").value;
    const email = document.getElementById("email").value;
    
    const datos ={
        'movil': movil,
        'email': email,
    };

    //Almacenamos los datos
    localStorage.setItem(nombre, JSON.stringify(datos));
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
    actualizarDatos();
}

function recuperarDatos(){
    const nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    document.getElementById("nombre").value = localStorage.getItem(nombre);
}

function eliminarDatos(){
    const nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}