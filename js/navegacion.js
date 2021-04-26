window.onload = init;
var secciones = [];
var rutas = ["index.html", "about.html", "gallery.html", "gallery2.html", "gallery3.html","contact.html","services.html", "login.html"];
var bajo_logueo =["contact.html"];
var permiso = true;

function init(){
    asignarSecciones();
    asignarRutas();
}

function asignarSecciones(){
    secciones["index.html"] = document.getElementById("index.html");
    secciones["about.html"] = document.getElementById("about.html");
    secciones["gallery.html"] = document.getElementById("gallery.html");
    secciones["gallery2.html"] = document.getElementById("gallery2.html");
    secciones["gallery3.html"] = document.getElementById("gallery3.html");
    secciones["contact.html"] = document.getElementById("contact.html");
    secciones["services.html"] = document.getElementById("services.html");
    secciones["login.html"] = document.getElementById("login.html");
}

function asignarRutas(){
    for (var i in secciones){
        secciones[i].addEventListener("click",navegacion);
        console.log(secciones[i])
    }
}

function navegacion(event){
    var id = event.target.id;
    console.log(id);
    controlAcceso(id);
    if(permiso == true){
        location.href=id;
    }
    else{
        alert("Para ingresar a esta sección debe registrarse e iniciar sesión primero");
    }
    permiso = true;
    
}

function controlAcceso(indice){
    for (var i in bajo_logueo){
       if (bajo_logueo[i] == indice){
           permiso = false;
       }
    }
}