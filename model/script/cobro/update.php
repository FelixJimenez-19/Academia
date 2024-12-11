
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/cobro/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/CobroDao.php';
$_entity = new CobroDao();
if (isset($_POST['cobro_mes']) and isset($_POST['cobro_pago']) and isset($_POST['estudiante_id']) and  isset($_POST['cobro_id'])) {
$cobro_mes = $_POST['cobro_mes']; 
$cobro_pago = $_POST['cobro_pago']; 
$estudiante_id = $_POST['estudiante_id'];
$cobro_id = $_POST['cobro_id'];
$_entity->update($cobro_mes, $cobro_pago, $estudiante_id, $cobro_id);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>    