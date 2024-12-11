                            
<?php
class ServicioDao{
private $conn;
public function __construct(){
$this->conn = new Mysql();
}
public function select(){
return $this->conn->query("SELECT * FROM servicio INNER JOIN empresa ON empresa.empresa_id = servicio.empresa_id ");
}
public function selectById($servicio){
return $this->conn->query("SELECT * FROM servicio  WHERE servicio = $servicio ");
}
public function insert($servicio_descripcion, $servicio_file, $empresa_id,$servicio_estado){
return $this->conn->query("INSERT INTO servicio SET servicio_descripcion='$servicio_descripcion', servicio_file='$servicio_file', empresa_id='$empresa_id', servicio_estado='$servicio_estado' ");
}
public function update($servicio_descripcion, $servicio_file, $empresa_id, $servicio,$servicio_estado){
return $this->conn->query("UPDATE servicio SET servicio_descripcion='$servicio_descripcion', servicio_file='$servicio_file', empresa_id='$empresa_id' , servicio_estado='$servicio_estado' WHERE servicio = $servicio ");
}
public function delete($servicio){
return $this->conn->query("DELETE FROM servicio WHERE servicio = $servicio ");
}


}
?>
            
                        