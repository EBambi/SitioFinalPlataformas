var resultado;

window.onload = init;

function init(){
    resultado = document.getElementById("resultado");
    if(resultado){
        traerDatos();
    }
}

function traerDatos(){
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
