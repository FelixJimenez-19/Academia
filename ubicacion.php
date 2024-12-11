<!DOCTYPE html>

<html lang="es">

<head>
  <?php include('view/page/public/head.php'); ?>
  <link rel="stylesheet" href="view/css/public/ubicacion.css">
</head>


<body>
  <header>
    <?php include('view/page/public/header.php'); ?>

  </header>
<?php 
$query=$conn->query("SELECT * FROM empresa");
$rs=mysqli_fetch_assoc($query);


?>



  <div class="localizacion_container">
    <h1>Localización</h1>
    <ul>
      <strong> <?php echo $rs['empresa_nombre']?> </strong>
      <li><?php echo $rs['empresa_ubicacion']?></li>
      <li><?php echo $rs['empresa_mail']?></li>
    </ul>
    
    <div style="width: 100%">
    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=3%20de%20Noviembre,%20Domingo%20Comin+(Academia)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    </iframe></div>
      

  </div>


  <footer>
    <?php include('view/page/public/footer.php'); ?>
  </footer>
</body>
<foot>
  <?php include('view/page/public/foot.php'); ?>
</foot>

</html>
