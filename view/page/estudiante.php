                            <?php
                            if (isset($viewPage)) {
                            ?>
                                <div class="header">
                                    <span>ESTUDIANTE</span>
                                    <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
                                    <button onclick="entity.fun.showModalForm(null)">+</button>
                                </div>

                                <div class="idea_content_table">
                                    <table class="idea_table">
                                        <thead>
                                            <tr>
                                                <td>ESTUDIANTE</td>
                                                <td>NOMBRE</td>
                                                <td>APELLIDO</td>
                                                <td>FECHA INSCRIPCION</td>
                                                <td>ACTIVO</td>
                                                <td>CEDULA</td>
                                                <td>EMAIL</td>
                                                <td>MOVIL</td>
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
                                            <input type="hidden" name="estudiante_id">

                                            <div class="row">
                                                <span>NOMBRE: </span>
                                                <input type="text" name="estudiante_nombre" placeholder="NOMBRE">
                                            </div>

                                            <div class="row">
                                                <span>APELLIDO: </span>
                                                <input type="text" name="estudiante_apellido" placeholder="APELLIDO">
                                            </div>

                                            <!-- <div class="row">
<span>ESTUDIANTE_FECHA_INSCRIPCION: </span>
<input type="date" name="estudiante_fecha_inscripcion" placeholder="ESTUDIANTE_FECHA_INSCRIPCION" >
</div> -->

                                            <div class="row">
                                                <span>ACTIVO: </span>
                                                <select name="estudiante_activo">
                                                    <option value="1">SI</option>
                                                    <option value="0">NO</option>
                                                </select>
                                            </div>

                                            <div class="row">
                                                <span>CEDULA: </span>
                                                <input type="text" name="estudiante_cedula" placeholder="INGRESE SU CEDULA">
                                            </div>

                                            <div class="row">
                                                <span>EMAIL: </span>
                                                <input type="text" name="estudiante_email" placeholder="EMAIL">
                                            </div>

                                            <div class="row">
                                                <span>MOVIL: </span>
                                                <input type="text" name="estudiante_movil" placeholder="MOVIL">
                                            </div>

                                            <div class="row">
                                                <span>EMPRESA: </span>
                                                <select name="empresa_id"></select>
                                            </div>

                                        </div>
                                        <div class="buttons">
                                            <button onclick="entity.estudiante.fun.insertOrUpdate()">GUARDAR</button>
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
                                            <button onclick="entity.fun.pressYesModalConfirm(() => entity.estudiante.crud.delete())">SI</button>
                                            <button onclick="entity.fun.hideModalConfirm()">NO</button>
                                        </div>
                                    </div>
                                </div>
                                <script src="control/script/estudiante.js"></script>
                            <?php
                            } else {
                                header("location: ../../panel.php");
                            }
                            ?>