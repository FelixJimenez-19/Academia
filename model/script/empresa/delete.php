
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/empresa/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/EmpresaDao.php';
$_entity = new EmpresaDao();
if(isset($_POST['empresa_id'])){
$empresa_id = $_POST['empresa_id'];
$_entity->delete($empresa_id);

echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>
     