
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/cuenta/logout.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
session_start();
session_destroy();
echo json_encode(["Success"]);
?>
     