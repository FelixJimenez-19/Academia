
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/servicio/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/ServicioDao.php';
$_entity = new ServicioDao();
if(isset($_POST['servicio'])){
$servicio = $_POST['servicio'];
$_entity->delete($servicio);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>
      