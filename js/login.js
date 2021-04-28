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
    var formulario = document.getElementById("formulario");

    fetch('scripts/script.php',{
        method:'post',
        body:new FormData(formulario)
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            localStorage.setItem(usuario, JSON.stringify(json));
			formulario.reset(); //blanquea los campos del form
			alert('Registro exitoso. Bienvenido '+usuario);
        }).catch(function(err){

        });
}

window.onload = logueo
var logueo =() =>{
	
    var usuario = document.getElementById("usuarioL").value;
	var psw = document.getElementById("passwordL").value;
	var formulario = document.getElementById("formularioL");
	let datos = localStorage.getItem(usuario);
	
	if (datos === null){
        alert("El usuario solicitado no estÃ¡ registrado");
    }
	else{
		if(datos){
            fetch('scripts/script.php',{
            method:'post',
            body:new FormData(formulario)
            }).then(function(response) {
                return response.json();
            }).then(function(json) {
                let dUsuario = JSON.parse(localStorage.getItem(usuario));
                if(dUsuario.password == json.password && valido==true && usuario!="" && psw!=""){
                    alert("Ingreso exitoso");
                    window.location.href = "contact.html"
                    usuario_logueado = true;
                }
                else{
                    alert('Los datos ingresados son incorrectos');
                }
            }).catch(function(err){

            });
	    }
	}
}
