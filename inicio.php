<!DOCTYPE html>
<html lang="es">

<head>
  <?php include('view/page/public/head.php'); ?>
  <link rel="stylesheet" href="view/css/public/nuestro_deporte.css">
  <link rel="stylesheet" href="view/css/public/historia.css">
</head>

<body>
  <header>
    <?php include('view/page/public/header.php'); ?>
  </header>
<?php
$query= $conn->query('SELECT * FROM empresa');
$rs=mysqli_fetch_assoc($query);

?>


  <div class="nuestro_deporte">
    <h1>Nuestro Deporte</h1>
    <p>Sistema de combate sin armas, de origen coreano, hoy principalmente deporte, en que dos contendientes utilizan golpes secos dados con los puños y con los pies y en el que se han desarrollado las técnicas de salto; los combates constan de tres períodos de dos minutos cada uno.</p>
    <div class="row">
      <img src="./view/src/tmp/1.jpg" alt="aqui alfo " />
      <img src="./view/src/tmp/9.jpg" alt="aqui alfo " />
      <img src="./view/src/tmp/que ptas.jpg" alt="aqui alfo" />
    </div>
  </div>

  <div class="container_historia">
    <h1>Historia</h1>
    <div class="row">
      <img src="./view/src/tmp/5.jpg" alt="image-history">
      <p><?php echo $rs['empresa_descripcion'];?></p>
    </div>
  </div>




  <footer>
    <?php include('view/page/public/footer.php'); ?>
  </footer>
</body>
<foot>
  <?php include('view/page/public/foot.php'); ?>
</foot>

</html>
