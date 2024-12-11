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


  <div class="container_item_img_text">
    <?php
      $query = $conn->query("SELECT * FROM promocion WHERE promocion_estado != 0");
      echo mysqli_num_rows($query) > 0 ? '<h1>Nuestras Promociones</h1>' : '<h1>No hay promociones</h1>';
      while($r = mysqli_fetch_assoc($query)){
        echo getItemImgText($r['promocion_img'], $r['promocion_descripcion']);
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
