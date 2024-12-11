                            
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/PromocionDao.php
*/
class PromocionDao{
private $conn;
public function __construct(){
$this->conn = new Mysql();
}
public function select(){
return $this->conn->query("SELECT * FROM promocion INNER JOIN empresa ON empresa.empresa_id=promocion.empresa_id ");
}
public function selectById($promocion_id){
return $this->conn->query("SELECT * FROM promocion WHERE promocion_id = $promocion_id");
}
public function insert($promocion_descripcion, $promocion_img, $empresa_id,$promocion_estado){
return $this->conn->query("INSERT INTO promocion SET promocion_descripcion='$promocion_descripcion', promocion_img='$promocion_img', empresa_id='$empresa_id', promocion_estado='$promocion_estado' ");
}
public function update($promocion_descripcion, $promocion_img, $empresa_id, $promocion_id,$promocion_estado){
return $this->conn->query("UPDATE promocion SET promocion_descripcion='$promocion_descripcion', promocion_img='$promocion_img', empresa_id='$empresa_id',promocion_estado='$promocion_estado' WHERE promocion_id = $promocion_id ");
}
public function delete($promocion_id){
return $this->conn->query("DELETE FROM promocion WHERE promocion_id = $promocion_id ");
}


}
?>
            
                        