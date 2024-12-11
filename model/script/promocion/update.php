           

<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/promocion/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/PromocionDao.php';
$_entity = new PromocionDao();
if (isset($_POST['promocion_descripcion']) and isset($_POST['promocion_img']) and isset($_POST['empresa_id']) and  isset($_POST['promocion_id']) and isset($_POST['promocion_estado'])) {
$promocion_descripcion = $_POST['promocion_descripcion']; 
$promocion_img = $_POST['promocion_img']; 
$empresa_id = $_POST['empresa_id'];
$promocion_estado= $_POST['promocion_estado'];
$promocion_id = $_POST['promocion_id'];
$_entity->update($promocion_descripcion, $promocion_img, $empresa_id, $promocion_id,$promocion_estado);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>            
     