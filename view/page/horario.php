                            
<?php
if (isset($viewPage)) {
?>
<div class="header">
<span>HORARIO</span>
<input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
<button onclick="entity.fun.showModalForm(null)">+</button>
</div>

<div class="idea_content_table">
<table class="idea_table">
<thead>
<tr>
<td>HORARIO</td>
<td>DIA</td>
<td>INICIO</td>
<td>FIN</td>
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
<input type="hidden" name="horario_id">
            
<div class="row">
<span>DIA: </span>
<input type="text" name="horario_dia" placeholder="DIA">
</div>

<div class="row">
<span>INICIO: </span>
<input type="text" name="horario_inicio" placeholder="INICIO">
</div>

<div class="row">
<span>FIN: </span>
<input type="text" name="horario_fin" placeholder="FIN">
</div>

<div class="row">
<span>EMPRESA: </span>
<select name="empresa_id"></select>
</div>
                    
</div>
<div class="buttons">
<button onclick="entity.horario.fun.insertOrUpdate()">GUARDAR</button>
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
<button onclick="entity.fun.pressYesModalConfirm(() => entity.horario.crud.delete())">SI</button>
<button onclick="entity.fun.hideModalConfirm()">NO</button>
</div>
</div>
</div>
<script src="control/script/horario.js"></script>
<?php
} else {
header("location: ../../panel.php");
}
?>
            
                        