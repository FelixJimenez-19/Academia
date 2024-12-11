
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/contacto/insert.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/ContactoDao.php';
$_entity = new ContactoDao();
if (isset($_POST['contacto_nombre']) and isset($_POST['contacto_email']) and isset($_POST['contacto_descripcion']) and isset($_POST['empresa_id'])) {
$contacto_nombre = $_POST['contacto_nombre']; 
$contacto_email = $_POST['contacto_email']; 
$contacto_descripcion = $_POST['contacto_descripcion']; 
$empresa_id = $_POST['empresa_id'];
$_entity->insert($contacto_nombre, $contacto_email, $contacto_descripcion, $empresa_id);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>