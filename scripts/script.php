<?php
    $salt = "MATRIX";
    $datosUsuario = array();
	if(isset($_POST["nombre"]) && isset($_POST["usuario"])){
		$datosUsuario["nombre"] = $_POST["nombre"];
		$datosUsuario["usuario"] = $_POST["usuario"];
	}
    $datosUsuario["password"] = md5($salt.$_POST["password"]);
    echo json_encode($datosUsuario);
?>