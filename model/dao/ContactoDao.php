                            
<?php

class ContactoDao{
private $conn;
public function __construct(){
$this->conn = new Mysql();
}
public function select(){
return $this->conn->query("SELECT * FROM contacto INNER JOIN empresa ON empresa.empresa_id = contacto.empresa_id ORDER BY contacto_id DESC");
}
public function selectById($contacto_id){
return $this->conn->query("SELECT * FROM contacto WHERE contacto_id = $contacto_id");
}
public function insert($contacto_nombre, $contacto_email, $contacto_descripcion, $empresa_id){
return $this->conn->query("INSERT INTO contacto SET contacto_nombre='$contacto_nombre', contacto_email='$contacto_email', contacto_descripcion='$contacto_descripcion', empresa_id=$empresa_id ");
}
public function update($contacto_nombre, $contacto_email, $contacto_descripcion, $empresa_id, $contacto_id){
return $this->conn->query("UPDATE contacto SET contacto_nombre='$contacto_nombre', contacto_email='$contacto_email', contacto_descripcion='$contacto_descripcion', empresa_id=$empresa_id WHERE contacto_id = $contacto_id ");
}
public function delete($contacto_id){
return $this->conn->query("DELETE FROM contacto WHERE contacto_id = $contacto_id ");
}


}
?>
            
                        