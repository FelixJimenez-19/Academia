<!DOCTYPE html>

<html lang="es">

<head>
  <?php include('view/page/public/head.php'); ?>
  <?php include('model/function/getHtml.php'); ?>

</head>


<body>
  <header>
    <?php include('view/page/public/header.php'); ?>
  </header>


  <div class='container_item_img_text'>
    <?php
      $query = $conn->query("SELECT * FROM servicio WHERE servicio_estado != 0");
    ?>
    <h1><?= mysqli_num_rows($query) > 0 ? 'Nuestro Servicio' : 'No hay servicios'?></h1>
    <?php
      while($r = mysqli_fetch_assoc($query)) {
        echo getItemImgText($r['servicio_file'], $r['servicio_descripcion']);
      }
    ?>
  </div>


  <footer>
    <?php include('view/page/public/footer.php'); ?>
  </footer>
</body>
<foot>
  <?php include('view/page/public/foot.php'); ?>
</foot>

</html>
