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