
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/cobro/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/CobroDao.php';
$_entity = new CobroDao();
if(isset($_POST['cobro_id'])){
$cobro_id = $_POST['cobro_id'];
$_entity->delete($cobro_id);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>