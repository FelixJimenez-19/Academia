
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/estudiante/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/EstudianteDao.php';
$_entity = new EstudianteDao();
if(isset($_POST['estudiante_id'])){
$estudiante_id = $_POST['estudiante_id'];
$_entity->delete($estudiante_id);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>
     