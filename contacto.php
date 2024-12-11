<!DOCTYPE html>

<html lang="es">

<head>
  <?php include('view/page/public/head.php'); ?>
  <link rel="stylesheet" href="view/css/public/contacto.css">
</head>

<body>
  <header>
    <?php include('view/page/public/header.php'); ?>
  </header>

  <div class="container_contacto">
    <h1>Formulario de Contacto</h1>

    <form action="contacto.php" method="POST" id="form-contacto">
      <input type="hidden" name="empresa_id" value="<?= mysqli_fetch_assoc($conn->query('SELECT * FROM empresa'))['empresa_id']; ?>">
      <div class="row">
        <span>Nombre:</span>
        <input type="text" name="contacto_nombre">
      </div>
      <div class="row">
        <span>E-mail:</span>
        <input type="text" name="contacto_email">
      </div>
      <div class="row">
        <span>Descripción:</span>
        <textarea name="contacto_descripcion"></textarea>
      </div>
      <div class="row">
        <div class="msg" id="contacto_msg"></div>
      </div>
      <div class="row">
        <input type="submit" value="Enviar">
      </div>
    </form>
  </div>

  <footer>
    <?php include('view/page/public/footer.php'); ?>
  </footer>
</body>
<foot>
  <?php include('view/page/public/foot.php'); ?>
  <script src="control/dao/config.js"></script>
  <script src="control/dao/ContactoDao.js"></script>
  <script src="control/script/public/contacto.js"></script>
</foot>

</html>