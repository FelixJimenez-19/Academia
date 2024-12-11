
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/cuenta/update.php
*/
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/CuentaDao.php';
$_entity = new CuentaDao();
if (isset($_POST['cuenta_cedula']) and isset($_POST['cuenta_nombre']) and isset($_POST['cuenta_pass']) and isset($_POST['empresa_id']) and  isset($_POST['cuenta_id'])) {
$cuenta_cedula = $_POST['cuenta_cedula']; 
$cuenta_nombre = $_POST['cuenta_nombre']; 
$cuenta_pass = $_POST['cuenta_pass']; 
$empresa_id = $_POST['empresa_id'];
$cuenta_id = $_POST['cuenta_id'];
$_entity->update($cuenta_cedula, $cuenta_nombre, $cuenta_pass, $empresa_id, $cuenta_id);

if(isset($_FILES['cuenta_foto'])){
$cuenta_foto = $_FILES['cuenta_foto'];
if($cuenta_foto['tmp_name'] != "" or $cuenta_foto['tmp_name'] != null){
if(!file_exists('../../../view/src/files/cuenta_foto')) {
mkdir("../../../view/src/files/cuenta_foto", 0700);
}

$desde = $cuenta_foto['tmp_name'];
$hasta = "../../../view/src/files/cuenta_foto/".$cuenta_id.".png";
copy($desde, $hasta);
$_entity->updateCuenta_foto($cuenta_id.".png",$cuenta_id);
}
}
                        
echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>    