                            <?php
                            if (isset($viewPage)) {
                            ?>
                                <div class="header">
                                    <span>EMPRESA</span>
                                    <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
                                    <button onclick="entity.fun.showModalForm(null)">+</button>
                                </div>

                                <div class="idea_content_table">
                                    <table class="idea_table">
                                        <thead>
                                            <tr>
                                                <td>EMPRESA</td>
                                                <td>NOMBRE</td>
                                                <td>VISION</td>
                                                <td>MISION</td>
                                                <td>UBICACION</td>
                                                <td>MAIL</td>
                                                <td>LOGO</td>
                                                <td>MAP</td>
                                                <td>HISTORIA</td>
                                                <td>ACCION</td>
                                            </tr>
                                        </thead>
                                        <tbody id="idea_table"></tbody>
                                    </table>
                                </div>


                                <div class="idea_form" id="idea_modal_form">
                                    <form id="idea_form" enctype="multipart/form-data">
                                        <span class="title">FORMULARIO</span>
                                        <div class="inputs">
                                            <input type="hidden" name="empresa_id">

                                            <div class="row">
                                                <span>NOMBRE: </span>
                                                <input type="text" name="empresa_nombre" placeholder="NOMBRE">
                                            </div>

                                            <div class="row">
                                                <span>VISION: </span>
                                                <input type="text" name="empresa_vision" placeholder="VISION">
                                            </div>

                                            <div class="row">
                                                <span>MISION: </span>
                                                <input type="text" name="empresa_mision" placeholder="MISION">
                                            </div>

                                            <div class="row">
                                                <span>UBICACION: </span>
                                                <input type="text" name="empresa_ubicacion" placeholder="UBICACION">
                                            </div>

                                            <div class="row">
                                                <span>MAIL: </span>
                                                <input type="text" name="empresa_mail" placeholder="MAIL">
                                            </div>

                                            <div class="row">
                                                <span>LOGO: </span>
                                                <input type="file" name="empresa_logo" require>
                                            </div>

                                            <div class="row">
                                                <span>MAP URL: </span>
                                                <input type="text" name="empresa_map" placeholder="MAP URL">
                                            </div>

                                            <div class="row">
                                                <span>DESCRIPCION: </span>
                                                <input type="text" name="empresa_descripcion" placeholder="DESCRIPCION">
                                            </div>

                                        </div>
                                        <div class="buttons">
                                            <button onclick="entity.empresa.fun.insertOrUpdate()">GUARDAR</button>
                                            <button onclick="entity.fun.hideModalForm()">CANCELAR</button>
                                        </div>
                                    </form>
                                </div>

                                <div class="idea_message" id="idea_modal_message">
                                    <div class="message">
                                        <span id="idea_message"></span>
                                        <button onclick="entity.fun.hideModalMessage()">ACEPTAR</button>
                                    </div>
                                </div>
                                <div class="idea_confirm" id="idea_modal_confirm">
                                    <div class="confirm">
                                        <span id="idea_confirm"></span>
                                        <div class="buttons">
                                            <button onclick="entity.fun.pressYesModalConfirm(() => entity.empresa.crud.delete())">SI</button>
                                            <button onclick="entity.fun.hideModalConfirm()">NO</button>
                                        </div>
                                    </div>
                                </div>
                                <script src="control/script/empresa.js"></script>

                            <?php
                            } else {
                                header("location: ../../panel.php");
                            }
                            ?>