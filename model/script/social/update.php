
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/social/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/SocialDao.php';
$_entity = new SocialDao();
if (isset($_POST['social_descripcion']) and isset($_POST['social_link']) and isset($_POST['social_logo']) and isset($_POST['empresa_id']) and  isset($_POST['social_id'])) {
$social_descripcion = $_POST['social_descripcion']; 
$social_link = $_POST['social_link']; 
$social_logo = $_POST['social_logo']; 
$empresa_id = $_POST['empresa_id'];
$social_id = $_POST['social_id'];
$_entity->update($social_descripcion, $social_link, $social_logo, $empresa_id, $social_id);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>            
     