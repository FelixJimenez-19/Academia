                            <?php

                            if (isset($viewPage)) {
                            ?>
                                <div class="header">
                                    <span>COBRO</span>
                                    <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
                                    <button onclick="entity.fun.showModalForm(null)">+</button>
                                </div>

                                <div class="idea_content_table">
                                    <table class="idea_table">
                                        <thead>
                                            <tr>
                                                <td>COBRO</td>
                                                <td>MES</td>
                                                <td>PAGO</td>
                                                <td>ESTUDIANTE</td>
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
                                            <input type="hidden" name="cobro_id">

                                            <div class="row">
                                                <span>MES: </span>
                                                <input type="text" name="cobro_mes" placeholder="MES">
                                            </div>

                                            <div class="row">
                                                <span>PAGO: </span>
                                                <input type="number" name="cobro_pago" placeholder="PAGO">
                                            </div>

                                            <div class="row">
                                                <span>ESTUDIANTE: </span>
                                                <select name="estudiante_id"></select>
                                            </div>

                                        </div>
                                        <div class="buttons">
                                            <button onclick="entity.cobro.fun.insertOrUpdate()">GUARDAR</button>
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
                                            <button onclick="entity.fun.pressYesModalConfirm(() => entity.cobro.crud.delete())">SI</button>
                                            <button onclick="entity.fun.hideModalConfirm()">NO</button>
                                        </div>
                                    </div>
                                </div>
                                <script src="control/script/cobro.js"></script>
                            <?php
                            } else {
                                header("location: ../../panel.php");
                            }
                            ?>