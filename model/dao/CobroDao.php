                            
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/CobroDao.php
*/
class CobroDao{
private $conn;
public function __construct(){
$this->conn = new Mysql();
}
public function select(){
return $this->conn->query("SELECT * FROM cobro INNER JOIN estudiante ON cobro.estudiante_id=estudiante.estudiante_id");
}
public function selectById($cobro_id){
return $this->conn->query("SELECT * FROM cobro WHERE cobro_id = $cobro_id");
}
public function insert($cobro_mes, $cobro_pago, $estudiante_id){
return $this->conn->query("INSERT INTO cobro SET cobro_mes='$cobro_mes', cobro_pago=$cobro_pago, estudiante_id=$estudiante_id ");
}
public function update($cobro_mes, $cobro_pago, $estudiante_id, $cobro_id){
return $this->conn->query("UPDATE cobro SET cobro_mes='$cobro_mes', cobro_pago=$cobro_pago, estudiante_id=$estudiante_id WHERE cobro_id = $cobro_id ");
}
public function delete($cobro_id){
return $this->conn->query("DELETE FROM cobro WHERE cobro_id = $cobro_id ");
}


}
?>
            
                        