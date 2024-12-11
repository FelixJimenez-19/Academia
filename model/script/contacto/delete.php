
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/contacto/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/ContactoDao.php';
$_entity = new ContactoDao();
if(isset($_POST['contacto_id'])){
$contacto_id = $_POST['contacto_id'];
$_entity->delete($contacto_id);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>
      