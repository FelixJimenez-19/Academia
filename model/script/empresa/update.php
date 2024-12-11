
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/empresa/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/EmpresaDao.php';
$_entity = new EmpresaDao();
if (isset($_POST['empresa_nombre']) and isset($_POST['empresa_vision']) and isset($_POST['empresa_mision']) and isset($_POST['empresa_ubicacion']) and isset($_POST['empresa_mail']) and isset($_POST['empresa_logo']) and isset($_POST['empresa_map']) and isset($_POST['empresa_descripcion']) and  isset($_POST['empresa_id'])) {
    $empresa_nombre = $_POST['empresa_nombre'];
    $empresa_vision = $_POST['empresa_vision'];
    $empresa_mision = $_POST['empresa_mision'];
    $empresa_ubicacion = $_POST['empresa_ubicacion'];
    $empresa_mail = $_POST['empresa_mail'];
    $empresa_logo = $_POST['empresa_logo'];
    $empresa_map = $_POST['empresa_map'];
    $empresa_descripcion = $_POST['empresa_descripcion'];
    $empresa_id = $_POST['empresa_id'];
    $_entity->update($empresa_nombre, $empresa_vision, $empresa_mision, $empresa_ubicacion, $empresa_mail, $empresa_logo, $empresa_map, $empresa_descripcion, $empresa_id);

    echo json_encode(["Success"]);
} else {
    echo json_encode([null]);
}
?> 