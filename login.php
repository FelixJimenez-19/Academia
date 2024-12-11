<?php
session_start();
if (empty($_SESSION['cuenta_cedula'])) {
?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
<link rel="icon" href="view/src/img/logo.png">
<title>LOGIN - ACADEMIA</title>
<link rel="stylesheet" href="view/css/config.css">
<link rel="stylesheet" href="view/css/login.css">
</head>
<body>
<form class="idea_login_form" id="idea_form_login">
<img src="view/src/img/logo.png" alt="idea_login_logo" class="idea_login_img_logo">
<span class="idea_login_span_title">ACADEMIA</span>
<input type="text" name="cuenta_cedula" placeholder="USUARIO" class="idea_login_input_text">
<input type="password" name="cuenta_pass" placeholder="CONTRASEÑA" class="idea_login_input_password">
<span class="idea_login_span_msg" id="idea_msg"></span>
<input type="submit" value="INICIAR SESION" class="idea_login_input_submit" >
</form>
</body>
<script src="control/dao/config.js"></script>
<script src="control/dao/CuentaDao.js"></script>
<script src="control/script/login.js"></script>
</html>
<?php
} else {
header("location: panel.php");
}
?>
            
                        