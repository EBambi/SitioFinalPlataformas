var resultado;

window.onload = init;

function init() {
    resultado = document.getElementById("resultado");
    asignarSecciones();
    asignarRutas();
    if(resultado){
        traerDatos();
    }
}

function traerDatos (){
    fetch('https://api.randomuser.me/?results=5')
    .then(response => response.json())
    .then(data => pintarDatos(data));
}

function pintarDatos(data){
    var temp;
    var ans = "";
    var datos = data.results

    for(var i in datos){
        temp = datos[i];
        ans += "<div class='usuario'><img class='img-circle' src='"+temp.picture.medium+"' />";
        ans+= "<p>";
        ans+= temp.name.first+" "+temp.name.last;
        ans+= "</p></div>";
    }
    resultado.innerHTML = ans;
}

var secciones = [];
var rutas = ["index.html", "about.html", "gallery.html", "gallery2.html", "gallery3.html","contact.html","services.html", "login.html"];

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
    location.href=id;   
}
