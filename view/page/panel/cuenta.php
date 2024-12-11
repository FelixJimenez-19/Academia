                            <?php
                         
                            if (isset($viewPage)) {
                            ?>
                                <div class="header">
                                    <span>CUENTA</span>
                                    <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
                                    <button onclick="entity.fun.showModalForm(null)">+</button>
                                </div>

                                <div class="idea_content_table">
                                    <table class="idea_table">
                                        <thead>
                                            <tr>
                                                <td>CUENTA</td>
                                                <td>CEDULA</td>
                                                <td>NOMBRE</td>
                                                <td>EMPRESA</td>
                                                <td>CUENTA FOTO</td>
                                                <td>ACCION</td>
                                            </tr>
                                        </thead>
                                        <tbody id="idea_table"></tbody>
                                    </table>
                                </div>


                                <div class="idea_form" id="idea_modal_form">
                                    <form id="idea_form">
                                        <span class="title">FORMULARIO</span>
                                        <div class="inputs">
                                            <input type="hidden" name="cuenta_id">

                                            <div class="row">
                                                <span>CEDULA: </span>
                                                <input type="text" name="cuenta_cedula" placeholder="CEDULA">
                                            </div>

                                            <div class="row">
                                                <span>NOMBRE: </span>
                                                <input type="text" name="cuenta_nombre" placeholder="NOMBRE">
                                            </div>

                                            <div class="row">
                                                <span>PASSWORD: </span>
                                                <input type="text" name="cuenta_pass" placeholder="PASSWORD">
                                            </div>

                                            <div class="row">
                                                <span>EMPRESA: </span>
                                                <select name="empresa_id"></select>
                                            </div>

                                            <div class="row">
                                                <span>FOTO: </span>
                                                <input type="file" name="cuenta_foto" placeholder="FOTO">
                                            </div>

                                        </div>
                                        <div class="buttons">
                                            <button onclick="entity.cuenta.fun.insertOrUpdate()">GUARDAR</button>
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
                                            <button onclick="entity.fun.pressYesModalConfirm(() => entity.cuenta.crud.delete())">SI</button>
                                            <button onclick="entity.fun.hideModalConfirm()">NO</button>
                                        </div>
                                    </div>
                                </div>
                                <script src="control/script/cuenta.js"></script>
                            <?php
                            } else {
                                header("location: ../../panel.php");
                            }
                            ?>