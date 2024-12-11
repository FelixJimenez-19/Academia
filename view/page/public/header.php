<?php

$conn = new Mysql();
$sql = "SELECT * FROM empresa";
$consulta = $conn->query($sql);
$array_empresa=mysqli_fetch_assoc($consulta);
$tot_row = mysqli_num_rows($consulta);
$result = array();
$result[]=$array_empresa;


?>

<div class="header-container">
  <input type="checkbox" id="btn-menu">
  <h1>
    <?php echo $array_empresa['empresa_nombre'] ?>
  </h1>
  <nav>
    <a href="inicio.php"> Inicio</a>
    <a href="servicio.php">Servicios </a>
    <a href="promocion.php">Promciones </a>
    <a href="contacto.php">Contacto </a>
    <a href="ubicacion.php">Ubicacion </a>
    <a href="login.php">Iniciar </a>
    
  </nav>
  <label for="btn-menu">
    <img src="view/src/icon/menu.png" alt="Icon menu" />
  </label>
</div>
<slider id="header-slider"></slider>


<script>
  const array_slider = [{
    
      src: 'view/src/tmp/1.jpg',
      description: 'Ven y se parte de nuestra academia'
    },
    {
      src: 'view/src/tmp/2.jpg',
      description: 'Nunca pares de pelear'
    },
    {
      src: 'view/src/tmp/3.jpg',
      description: 'Nosotros sabemos de que eres capaz'
    },
    {
      src: 'view/src/tmp/4.jpg',
      description: 'Tu eres la bala'
    }
  ]
  const slider = new IdeaSlider({
    idSliderContainer: 'header-slider',
    arrayImages: array_slider,
    timeForImg: 5000,
    timeForTransition: 1000
  });

    // $(document).keypress(function(e) {
    //   e=e || event;
    //   if(e.ctrlKey && String.fromCharCode(e.keyCode)== 'c'){
    //   }else{
    //     <?php 
    //       header('location: login.php');
    //       ?>

        
    //   }

    // });

</script>
