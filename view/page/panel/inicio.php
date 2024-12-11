                            
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/inicio.php
*/
if (isset($viewPage)) {
?>
<img src="./view/src/tmp/4.jpg" class="idea_logo_home">
<?php
} else {
header("location: ../../panel.php");
}
?>
            
                        