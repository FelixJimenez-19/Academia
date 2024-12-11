                            
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/social.php
*/
if (isset($viewPage)) {
?>
<div class="header">
<span>SOCIAL</span>
<input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
<button onclick="entity.fun.showModalForm(null)">+</button>
</div>

<div class="idea_content_table">
<table class="idea_table">
<thead>
<tr>
<td>SOCIAL</td>
<td>DESCRIPCION</td>
<td>LINK</td>
<td>LOGO</td>
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
<input type="hidden" name="social_id">
            
<div class="row">
<span>DESCRIPCION: </span>
<input type="text" name="social_descripcion" placeholder="DESCRIPCION">
</div>

<div class="row">
<span>LINK: </span>
<input type="text" name="social_link" placeholder="LINK">
</div>

<div class="row">
<span>SOCIAL LOGO: </span>
<input type="file" name="social_logo" placeholder="LOGO">
</div>

<div class="row">
<span>EMPRESA: </span>
<select name="empresa_id"></select>
</div>
                    
</div>
<div class="buttons">
<button onclick="entity.social.fun.insertOrUpdate()">GUARDAR</button>
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
<button onclick="entity.fun.pressYesModalConfirm(() => entity.social.crud.delete())">SI</button>
<button onclick="entity.fun.hideModalConfirm()">NO</button>
</div>
</div>
</div>
<script src="control/script/social.js"></script>
<?php
} else {
header("location: ../../panel.php");
}
?>
            
                        