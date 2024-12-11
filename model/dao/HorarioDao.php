                            
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/HorarioDao.php
*/
class HorarioDao{
private $conn;
public function __construct(){
$this->conn = new Mysql();
}
public function select(){
return $this->conn->query("SELECT * FROM horario INNER JOIN empresa ON empresa.empresa_id=horario.empresa_id ");
}
public function selectById($horario_id){
return $this->conn->query("SELECT * FROM horario WHERE horario_id = $horario_id");
}
public function insert($horario_dia, $horario_inicio, $horario_fin, $empresa_id){
return $this->conn->query("INSERT INTO horario SET horario_dia='$horario_dia', horario_inicio='$horario_inicio', horario_fin='$horario_fin', empresa_id=$empresa_id ");
}
public function update($horario_dia, $horario_inicio, $horario_fin, $empresa_id, $horario_id){
return $this->conn->query("UPDATE horario SET horario_dia='$horario_dia', horario_inicio='$horario_inicio', horario_fin='$horario_fin', empresa_id=$empresa_id WHERE horario_id = $horario_id ");
}
public function delete($horario_id){
return $this->conn->query("DELETE FROM horario WHERE horario_id = $horario_id ");
}


}
?>
            
                        