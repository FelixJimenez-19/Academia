
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/social/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/SocialDao.php';
$_entity = new SocialDao();
if(isset($_POST['social_id'])){
$social_id = $_POST['social_id'];
$_entity->delete($social_id);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>