                            
<?php
class EmpresaDao{
private $conn;
public function __construct(){
$this->conn = new Mysql();
}
public function select(){
return $this->conn->query("SELECT * FROM empresa");
}
public function selectById($empresa_id){
return $this->conn->query("SELECT * FROM empresa WHERE empresa_id = $empresa_id");
}
public function insert($empresa_nombre, $empresa_vision, $empresa_mision, $empresa_ubicacion, $empresa_mail, $empresa_logo, $empresa_map, $empresa_descripcion){
return $this->conn->query("INSERT INTO empresa SET empresa_nombre='$empresa_nombre', empresa_vision='$empresa_vision', empresa_mision='$empresa_mision', empresa_ubicacion='$empresa_ubicacion', empresa_mail='$empresa_mail', empresa_logo='$empresa_logo', empresa_map='$empresa_map', empresa_descripcion='$empresa_descripcion' ");
}
public function update($empresa_nombre, $empresa_vision, $empresa_mision, $empresa_ubicacion, $empresa_mail, $empresa_logo, $empresa_map, $empresa_descripcion, $empresa_id){
return $this->conn->query("UPDATE empresa SET empresa_nombre='$empresa_nombre', empresa_vision='$empresa_vision', empresa_mision='$empresa_mision', empresa_ubicacion='$empresa_ubicacion', empresa_mail='$empresa_mail', empresa_logo='$empresa_logo', empresa_map='$empresa_map', empresa_descripcion='$empresa_descripcion' WHERE empresa_id = $empresa_id ");
}
public function delete($empresa_id){
return $this->conn->query("DELETE FROM empresa WHERE empresa_id = $empresa_id ");
}


}
?>
            
                        