                            
<?php
class CuentaDao
{
    private $conn;
    public function __construct()
    {

        $this->conn = new Mysql();
    }
    public function select()
    {
        return $this->conn->query("SELECT * FROM cuenta INNER JOIN empresa ON cuenta.empresa_id = empresa.empresa_id");
    }
    public function selectById($cuenta_id)
    {
        return $this->conn->query("SELECT * FROM cuenta WHERE cuenta_id = $cuenta_id");
    }
    public function insert($cuenta_cedula, $cuenta_nombre, $cuenta_pass, $empresa_id)
    {
        $password = md5($cuenta_pass);
        return $this->conn->query("INSERT INTO cuenta SET cuenta_cedula='$cuenta_cedula', cuenta_nombre='$cuenta_nombre', cuenta_pass='$password', empresa_id=$empresa_id ");
    }
    public function update($cuenta_cedula, $cuenta_nombre, $cuenta_pass, $empresa_id, $cuenta_id)
    {
        $password = md5($cuenta_pass);
        return $this->conn->query("UPDATE cuenta SET cuenta_cedula='$cuenta_cedula', cuenta_nombre='$cuenta_nombre', cuenta_pass='$password', empresa_id=$empresa_id WHERE cuenta_id = $cuenta_id ");
    }
    public function delete($cuenta_id)
    {
        return $this->conn->query("DELETE FROM cuenta WHERE cuenta_id = $cuenta_id ");
    }

    public function selectByAll($cuenta_cedula, $cuenta_nombre, $cuenta_pass, $empresa_id)
    {
        return $this->conn->query("SELECT * FROM cuenta WHERE cuenta_cedula='$cuenta_cedula' AND cuenta_nombre='$cuenta_nombre' AND cuenta_pass='$cuenta_pass' AND empresa_id=$empresa_id ");
    }

    public function updateCuenta_foto($cuenta_foto, $cuenta_id)
    {
        return $this->conn->query("UPDATE cuenta SET cuenta_foto='$cuenta_foto' WHERE cuenta_id = $cuenta_id ");
    }


    public function login($cuenta_cedula, $cuenta_pass)
    {
        
        return $this->conn->query("SELECT * FROM cuenta WHERE cuenta_cedula='$cuenta_cedula' AND cuenta_pass='$cuenta_pass' ");
    }
}
?>
            
                        
                        