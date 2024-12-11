                            <?php
                            
                            if (isset($viewPage)) {
                            ?>
                                <div class="header">
                                    <span>PROMOCION</span>
                                    <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
                                    <button onclick="entity.fun.showModalForm(null)">+</button>
                                </div>

                                <div class="idea_content_table">
                                    <table class="idea_table">
                                        <thead>
                                            <tr>
                                                <td>PROMOCION</td>
                                                <td>DESCRIPCION</td>
                                                <td>IMG</td>
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
                                            <input type="hidden" name="promocion_id">
                                            <div class="row">
                                                <span>DESCRIPCION: </span>
                                                <input type="text" name="promocion_descripcion" placeholder="DESCRIPCION">
                                            </div>

                                            <div class="row">
                                                <span>IMG: </span>
                                                <input type="text" name="promocion_img">
                                            </div>

                                            <div class="row">
                                                <span>ESTADO: </span>
                                                <select name="promocion_estado">
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
                                            <button onclick="entity.promocion.fun.insertOrUpdate()">GUARDAR</button>
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
                                            <button onclick="entity.fun.pressYesModalConfirm(() => entity.promocion.crud.delete())">SI</button>
                                            <button onclick="entity.fun.hideModalConfirm()">NO</button>
                                        </div>
                                    </div>
                                </div>
                                <script src="control/script/promocion.js"></script>
                            <?php
                            } else {
                                header("location: ../../panel.php");
                            }
                            ?>