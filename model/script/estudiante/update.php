
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/estudiante/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/EstudianteDao.php';
$_entity = new EstudianteDao();
if (
    isset($_POST['estudiante_nombre']) and
    isset($_POST['estudiante_apellido']) and
    // isset($_POST['estudiante_fecha_inscripcion']) and
    isset($_POST['estudiante_activo']) and
    isset($_POST['estudiante_cedula']) and
    isset($_POST['estudiante_email']) and
    isset($_POST['estudiante_movil']) and
    isset($_POST['empresa_id']) and
    isset($_POST['estudiante_id'])
) {
    $estudiante_nombre = $_POST['estudiante_nombre'];
    $estudiante_apellido = $_POST['estudiante_apellido'];
    // $estudiante_fecha_inscripcion = $_POST['estudiante_fecha_inscripcion'];
    $estudiante_activo = $_POST['estudiante_activo'];
    $estudiante_cedula = $_POST['estudiante_cedula'];
    $estudiante_email = $_POST['estudiante_email'];
    $estudiante_movil = $_POST['estudiante_movil'];
    $empresa_id = $_POST['empresa_id'];
    $estudiante_id = $_POST['estudiante_id'];
    $_entity->update(
        $estudiante_nombre, 
        $estudiante_apellido, 
        // $estudiante_fecha_inscripcion, 
        $estudiante_activo, 
        $estudiante_cedula, 
        $estudiante_email, 
        $estudiante_movil, 
        $empresa_id, 
        $estudiante_id
    );

    echo json_encode(["Success"]);
} else {
    echo json_encode([null]);
}
?>   