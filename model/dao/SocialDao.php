                            
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/SocialDao.php
*/
class SocialDao{
private $conn;
public function __construct(){
$this->conn = new Mysql();
}
public function select(){
return $this->conn->query("SELECT * FROM social INNER JOIN empresa ON empresa.empresa_id= social.empresa_id");
}
public function selectById($social_id){
return $this->conn->query("SELECT * FROM social WHERE social_id = $social_id");
}
public function insert($social_descripcion, $social_link, $social_logo, $empresa_id){
return $this->conn->query("INSERT INTO social SET social_descripcion='$social_descripcion', social_link='$social_link', social_logo='$social_logo', empresa_id=$empresa_id ");
}
public function update($social_descripcion, $social_link, $social_logo, $empresa_id, $social_id){
return $this->conn->query("UPDATE social SET social_descripcion='$social_descripcion', social_link='$social_link', social_logo='$social_logo', empresa_id=$empresa_id WHERE social_id = $social_id ");
}
public function delete($social_id){
return $this->conn->query("DELETE FROM social WHERE social_id = $social_id ");
}


}
?>
            
                        