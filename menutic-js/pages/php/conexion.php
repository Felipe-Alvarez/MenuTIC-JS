<?php 

$servidor="localhost";
$usuario="root";
$clave="";
$basedatos="user_bussines";

$enlace = myqli_connect($servidor,$usuario,$clave,$basedatos);

if(!$enlace){
    echo="Error en la conexión con el servidor";
}
?>