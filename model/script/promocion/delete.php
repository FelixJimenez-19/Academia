
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/promocion/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/PromocionDao.php';
$_entity = new PromocionDao();
if(isset($_POST['promocion_id'])){
$promocion_id = $_POST['promocion_id'];
$_entity->delete($promocion_id);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>
         