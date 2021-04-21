var boton_wpp;

window.onload = function(){
  boton_wpp = document.getElementById("boton_wpp");
  boton_wpp.addEventListener("click",function(){
  	var url = "https://wa.me/573007883256";
    window.open(url,"_blank").focus();
    });
}