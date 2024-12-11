
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/cuenta/login.php
*/
session_start();
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
include './../../dao/Mysql.php';
include './../../dao/CuentaDao.php';
$_entity = new CuentaDao();
if(isset($_POST['cuenta_cedula']) and isset($_POST['cuenta_pass'])){
$cuenta_cedula = $_POST['cuenta_cedula'];
$cuenta_pass = $_POST['cuenta_pass'];
$rs = mysqli_fetch_assoc($_entity->login($cuenta_cedula, md5($cuenta_pass)));
if($rs['cuenta_cedula'] == $cuenta_cedula and $rs['cuenta_pass'] == md5($cuenta_pass)){
$_SESSION['cuenta_id'] = $rs['cuenta_id'];
$_SESSION['cuenta_cedula'] = $rs['cuenta_cedula'];
$_SESSION['cuenta_nombre'] = $rs['cuenta_nombre'];
$_SESSION['cuenta_pass'] = $rs['cuenta_pass'];
$_SESSION['cuenta_foto'] = $rs['cuenta_foto'];
$_SESSION['empresa_id'] = $rs['empresa_id'];
echo json_encode($rs);
} else {
echo json_encode([null]);
}
} else {
echo json_encode([null]);
}
?>