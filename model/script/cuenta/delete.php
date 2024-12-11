
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/script/cuenta/delete.php
*/
include './../../dao/Mysql.php';
include './../../dao/CuentaDao.php';
$_entity = new CuentaDao();
if(isset($_POST['cuenta_id'])){
$cuenta_id = $_POST['cuenta_id'];
$_entity->delete($cuenta_id);

if(file_exists("../../../view/src/files/cuenta_foto/".$cuenta_id.".png")){
unlink("../../../view/src/files/cuenta_foto/".$cuenta_id.".png");
}
                        
echo json_encode(["Success"]);
} else {
echo json_encode([null]);
}
?>