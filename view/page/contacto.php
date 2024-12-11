<?php
if (isset($viewPage)) {
?>
    <div class="header">
        <span>CONTACTO</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>CONTACTO</td>
                    <td>NOMBRE</td>
                    <td>EMAIL</td>
                    <td>DESCRIPCION</td>
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
                <input type="hidden" name="contacto_id">

                <div class="row">
                    <span>NOMBRE: </span>
                    <input type="text" name="contacto_nombre" placeholder="CONTACTO_NOMBRE">
                </div>

                <div class="row">
                    <span>EMAIL: </span>
                    <input type="text" name="contacto_email" placeholder="CONTACTO_EMAIL">
                </div>

                <div class="row row-textarea">
                    <span>DESCRIPCION: </span>
                    <textarea name="contacto_descripcion" id="contacto_descripcion"></textarea>
                    <!-- <input type="text" name="contacto_descripcion" placeholder="CONTACTO_DESCRIPCION"> -->
                </div>

                <div class="row">
                    <span>EMPRESA: </span>
                    <select name="empresa_id"></select>
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.contacto.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.contacto.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/contacto.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>