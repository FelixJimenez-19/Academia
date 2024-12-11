
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/horario/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/HorarioDao.php';
$_entity = new HorarioDao();
if(isset($_POST['horario_id'])){
$horario_id = $_POST['horario_id'];
$_entity->delete($horario_id);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>