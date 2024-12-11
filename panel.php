        <?php
        session_start();
        if (isset($_SESSION['cuenta_cedula'])) {
            $viewPage = 0;
        ?>
            <!DOCTYPE html>
            <html lang="es">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
                <link rel="icon" href="view/src/img/logo.png">
                <title>PANEL - ACADEMIA</title>
                <link rel="stylesheet" href="view/css/config.css">
                <link rel="stylesheet" href="view/css/panel.css">
            </head>

            <body>
                <input type="checkbox" id="idea_input_check_header_tool">
                <div class="idea_header">
                    <div class="idea_title">
                        <span class="idea_title1">ACADEMIA</span>
                        <span class="idea_title2">A.</span>
                    </div>
                    <label for="idea_input_check_header_tool" class="idea_menu">
                        <img src="view/src/icon/menu.png" class="idea_header_label_tool_img">
                    </label>
                    <input type="checkbox" id="idea_input_check_profile">
                    <label for="idea_input_check_profile" class="idea_profile">
                        <span><?php echo $_SESSION['cuenta_cedula'] ?></span>
                        <img src="view/src/img/avatar.png">
                        <!--<img src="view/src/<?php echo ($_SESSION['usuario_foto'] !== null) ? 'files/cuenta_foto/' . $_SESSION['cuenta_foto'] : 'img/avatar.png' ?>">-->
                        <div class="idea_profile_options">
                            <img src="view/src/img/avatar.png">
                            <!--<img src="view/src/<?php echo ($_SESSION['usuario_foto'] !== null) ? 'files/cuenta_foto/' . $_SESSION['cuenta_foto'] : 'img/avatar.png' ?>">-->
                            <span><?php echo $_SESSION['cuenta_cedula'] ?></span>

                            <a class="idea_link" href="panel.php?page=cuenta">CUENTA</a>
                            <button id="idea_btn_logount">CERRAR SESION</button>
                        </div>
                    </label>
                </div>
                <div class="idea_tool">
                    <img src="./view/src/tmp/11.png" class="logo">
                    <div class="idea_options">

                        <div class="idea_option">
                            <a href="panel.php?page=inicio">
                                <label>
                                    <span>inicio</span>
                                    <img src="view/src/icon/in.png">
                                </label>
                            </a>
                        </div>

                        <div class="idea_option">
                            <a href="panel.php?page=empresa">
                                <label>
                                    <span>Empresa</span>
                                    <img src="view/src/icon/in.png">
                                </label>
                            </a>
                        </div>

                        <div class="idea_option">
                            <a href="panel.php?page=estudiante">
                                <label>
                                    <span>Estudiante</span>
                                    <img src="view/src/icon/in.png">
                                </label>
                            </a>
                        </div>

                        <div class="idea_option">
                            <a href="panel.php?page=cobro">
                                <label>
                                    <span>Cobro</span>
                                    <img src="view/src/icon/in.png">
                                </label>
                            </a>
                        </div>
                        <!-- 
        <div class="idea_option">
        <a href="panel.php?page=cuenta">
        <label>
        <span>Cuenta</span>
        <img src="view/src/icon/in.png">
        </label>
        </a>
        </div> -->

                        <div class="idea_option">
                            <a href="panel.php?page=horario">
                                <label>
                                    <span>Horario</span>
                                    <img src="view/src/icon/in.png">
                                </label>
                            </a>
                        </div>

                        <div class="idea_option">
                            <a href="panel.php?page=promocion">
                                <label>
                                    <span>Promocion</span>
                                    <img src="view/src/icon/in.png">
                                </label>
                            </a>
                        </div>

                        <div class="idea_option">
                            <a href="panel.php?page=social">
                                <label>
                                    <span>Social</span>
                                    <img src="view/src/icon/in.png">
                                </label>
                            </a>
                        </div>

                        <div class="idea_option">
                            <a href="panel.php?page=servicio">
                                <label>
                                    <span>Servicio</span>
                                    <img src="view/src/icon/in.png">
                                </label>
                            </a>
                        </div>

                        <div class="idea_option">
                            <a href="panel.php?page=contacto">
                                <label>
                                    <span>Contacto</span>
                                    <img src="view/src/icon/in.png">
                                </label>
                            </a>
                        </div>

                    </div>
                </div>
                <!-- SCRIPTS | START -->
                <script src="control/dao/config.js"></script>
                <script src="control/dao/EmpresaDao.js"></script>
                <script src="control/dao/EstudianteDao.js"></script>
                <script src="control/dao/CobroDao.js"></script>
                <script src="control/dao/CuentaDao.js"></script>
                <script src="control/dao/HorarioDao.js"></script>
                <script src="control/dao/PromocionDao.js"></script>
                <script src="control/dao/SocialDao.js"></script>
                <script src="control/dao/ServicioDao.js"></script>
                <script src="control/dao/ContactoDao.js"></script>
                <script src="control/script/panel.js"></script>
                <!-- SCRIPTS | END -->
                <div class="idea_content">
                    <?php
                    $viewPage = 'view/page/panel/';
                    if (isset($_GET['page'])) {
                        include $viewPage . $_GET['page'] . '.php';
                    } else {
                        include $viewPage . 'inicio.php';
                    }
                    ?>
                </div>
            </body>

            </html>
        <?php
        } else {
            header("location: login.php");
        }
        ?>