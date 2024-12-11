                            <?php
                            /*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/servicio.php
*/
                            if (isset($viewPage)) {
                            ?>
                                <div class="header">
                                    <span>SERVICIO</span>
                                    <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
                                    <button onclick="entity.fun.showModalForm(null)">+</button>
                                </div>

                                <div class="idea_content_table">
                                    <table class="idea_table">
                                        <thead>
                                            <tr>
                                                <td>SERVICIO</td>
                                                <td>DESCRIPCION</td>
                                                <td>FOTO</td>
                                                <td>ESTADO</td>
                                                <td>EMPRESA</td>
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
                                            <input type="hidden" name="servicio">

                                            <div class="row">
                                                <span>DESCRIPCION: </span>
                                                <input type="text" name="servicio_descripcion" placeholder="DESCRIPCION">
                                            </div>

                                            <div class="row">
                                                <span>IMAGEN: </span>
                                                <input type="file" name="servicio_file" placeholder="FILE">
                                            </div>

                                            <div class="row">
                                                <span>ESTADO: </span>
                                                <select name="servicio_estado">
                                                    <option value="1">SI</option>
                                                    <option value="0">NO</option>
                                                </select>
                                            </div>

                                            <div class="row">
                                                <span>EMPRESA: </span>
                                                <select name="empresa_id"></select>
                                            </div>

                                        </div>
                                        <div class="buttons">
                                            <button onclick="entity.servicio.fun.insertOrUpdate()">GUARDAR</button>
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
                                            <button onclick="entity.fun.pressYesModalConfirm(() => entity.servicio.crud.delete())">SI</button>
                                            <button onclick="entity.fun.hideModalConfirm()">NO</button>
                                        </div>
                                    </div>
                                </div>
                                <script src="control/script/servicio.js"></script>
                            <?php
                            } else {
                                header("location: ../../panel.php");
                            }
                            ?>