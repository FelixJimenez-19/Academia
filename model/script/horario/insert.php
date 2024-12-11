
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/horario/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/HorarioDao.php';
$_entity = new HorarioDao();
if (isset($_POST['horario_dia']) and isset($_POST['horario_inicio']) and isset($_POST['horario_fin']) and isset($_POST['empresa_id'])) {
$horario_dia = $_POST['horario_dia']; 
$horario_inicio = $_POST['horario_inicio']; 
$horario_fin = $_POST['horario_fin']; 
$empresa_id = $_POST['empresa_id'];
$_entity->insert($horario_dia, $horario_inicio, $horario_fin, $empresa_id);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>