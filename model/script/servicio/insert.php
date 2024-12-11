
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/servicio/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/ServicioDao.php';
$_entity = new ServicioDao();
if (isset($_POST['servicio_descripcion']) and isset($_POST['servicio_file']) and isset($_POST['empresa_id']) and isset($_POST['servicio_estado'])) {
$servicio_descripcion = $_POST['servicio_descripcion']; 
$servicio_file = $_POST['servicio_file']; 
$servicio_estado = $_POST['servicio_estado'];
$empresa_id = $_POST['empresa_id'];
$_entity->insert($servicio_descripcion, $servicio_file, $empresa_id,$servicio_estado);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>