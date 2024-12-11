                            
<?php
/* 
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/model/dao/EstudianteDao.php
*/
class EstudianteDao
{


    private $conn;
    public function __construct()
    {
        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM estudiante INNER JOIN empresa ON estudiante.empresa_id = empresa.empresa_id");
    }
    public function selectById($estudiante_id)
    {
        return $this->conn->query("SELECT * FROM estudiante WHERE estudiante_id = $estudiante_id");
    }
    public function insert($estudiante_nombre, $estudiante_apellido, $estudiante_activo, $estudiante_cedula, $estudiante_email, $estudiante_movil, $empresa_id)
    {
        date_default_timezone_set("America/Guayaquil");
        $fecha = date("Y-m-d");
        return $this->conn->query("INSERT INTO estudiante SET estudiante_nombre='$estudiante_nombre', estudiante_apellido='$estudiante_apellido', estudiante_fecha_inscripcion='$fecha', estudiante_activo=$estudiante_activo, estudiante_cedula='$estudiante_cedula', estudiante_email='$estudiante_email', estudiante_movil='$estudiante_movil', empresa_id=$empresa_id ");
    }

    public function update($estudiante_nombre, $estudiante_apellido, $estudiante_activo, $estudiante_cedula, $estudiante_email, $estudiante_movil, $empresa_id, $estudiante_id)
    {
        date_default_timezone_set("America/Guayaquil");
        $fecha = date("Y-m-d");
        return $this->conn->query("UPDATE estudiante SET estudiante_nombre='$estudiante_nombre', estudiante_apellido='$estudiante_apellido', estudiante_fecha_inscripcion='$fecha', estudiante_activo=$estudiante_activo, estudiante_cedula='$estudiante_cedula', estudiante_email='$estudiante_email', estudiante_movil='$estudiante_movil', empresa_id=$empresa_id WHERE estudiante_id = $estudiante_id ");
    }
    public function delete($estudiante_id)
    {
        return $this->conn->query("DELETE FROM estudiante WHERE estudiante_id = $estudiante_id ");
    }
}
?>
            
                        