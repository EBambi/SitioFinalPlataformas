var boton_wpp;

window.onload = function(){
  boton_wpp = document.getElementById("boton_wpp");
  boton_wpp.addEventListener("click",function(){
  	var url = "https://wa.me/573007883256";
    window.open(url,"_blank").focus();
    });
}

function getDocHeight(){
  var D = document;
  return Math.max( D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight)

}

function amountScrolled(){
  var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
  var docheight = getDocHeight()
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body)
  var trackLength = docheight - winheight
  var pctScrolled = Math.floor(scrollTop/trackLength*100)

  if(pctScrolled > 10){
    boton_flecha.classList.remove("ocultar_flecha");
  }
  else{
    boton_flecha.classList.add("ocultar_flecha");
  }
}
window.addEventListener("scroll",function(){
  amountScrolled()
}, false);