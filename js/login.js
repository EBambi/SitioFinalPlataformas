//JAVASCRIPT PARA REGISTRO
var usuario_logueado = false;
var valido;
window.onload = validacion


//funcion para validar que los campos esten completos
var validacion = () => {
    var valores = [];
    valido = true;
    //agrego datos del usuario en un array
    valores.push(document.getElementById("nombre").value);
    valores.push(document.getElementById("usuario").value);
    valores.push(document.getElementById("password").value);

    for(let i=0; i<valores.length; i++){
        if (valores[i] == ""){
            valido = false;
        }
    }

    if(valido == true){
        registro();
    } else{
        alert('Por favor completa todos los campos');
    }
}

var registro = () => {
    var nombre = document.getElementById("nombre").value; //obtengo los valores del los campos del form
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var formulario = document.getElementById("formulario");

    //creo un objeto usuario
    var datosUsuario = {
        nombre: nombre,
        usuario: usuario,
        password: password
    };


    //agrego los datos del usuario al localStorage
    localStorage.setItem(datosUsuario.usuario, JSON.stringify(datosUsuario));
    console.log(datosUsuario)
    formulario.reset(); //blanquea los campos del form
    alert('Registro exitoso. Bienvenido '+datosUsuario.usuario);
}

window.onload = logueo

var logueo =() =>{
    var usuario = document.getElementById("usuarioL").value;
    var password = document.getElementById("passwordL").value;
    var datos = JSON.parse(localStorage.getItem(usuario));

    console.log(datos);
    if (datos === null){
        alert("El usuario solicitado no estÃ¡ registrado");
    }
    else{
        
        if(usuario == datos.usuario && password == datos.password && valido==true && usuario!="" && password!=""){
            alert('Ingreso exitoso');
            window.location.href="contact.html";
            usuario_logueado = true;
        }
        else {
            alert('Los datos ingresados son incorrectos');
        }
    }
}