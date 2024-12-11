<?php
// $conn = new Mysql();
$sql = "SELECT * FROM empresa";
$consulta = $conn->query($sql);
$array_empresa = mysqli_fetch_assoc($consulta);
$tot_row = mysqli_num_rows($consulta);


?>


<div class="container-footer">
  <h2><?php echo $array_empresa['empresa_nombre'] ?></h2>
  <div class="container">

    <div class="col">
      <h3>Misión</h3>
      <p>
        <?php echo $array_empresa['empresa_mision'] ?>
      </p>
      <h3>Visión</h3>
      <p>
        <?php echo $array_empresa['empresa_vision'] ?>
      </p>
    </div>

    <?php
    $sql1 = "SELECT * FROM horario";
    $consulta = $conn->query($sql1);
    $array_horario = mysqli_fetch_assoc($consulta);
    $horarios = array();


    ?>

    <div class="col">
      <h3>Sobre nosotros</h3>
      <h4>Sucúa - Ecuador</h4>
      <h3>Horarios</h3>

      <?php
      do {
        $horarios[] = $array_horario;
      ?>

        <h4><?php echo $array_horario['horario_dia']; ?></h4>
        <h5><?php echo $array_horario['horario_inicio'];
            echo " - " . $array_horario['horario_fin']; ?></h5>
      <?php
      } while ($array_horario = mysqli_fetch_assoc($consulta));

      ?>

    </div>
    <div class="col">
      <?php

      $sql2 = "SELECT * FROM social";
      $consulta = $conn->query($sql2);
      $array_social = mysqli_fetch_assoc($consulta);
      $social=array();
      
      ?>

      <h3>Contactanos</h3>
      <div class="contact">

      <?php
        do{
          $social[]=$array_social;
        
      ?>

        <a href=" <?php  echo $array_social['social_link'];?> ">
          
          <img src=" <?php echo $array_social['social_logo']?>" />
        </a>
         
        <?php 
        }while($array_social=mysqli_fetch_assoc($consulta));
        ?>
      </div>
    </div>
  </div>
</div>

