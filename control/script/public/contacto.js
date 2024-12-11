let validar = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let form = document.getElementById('form-contacto');
form.onsubmit = (evt) => {
    evt.preventDefault();
    if (
        form.empresa_id.value != "" &&
        form.contacto_nombre.value != "" &&
        form.contacto_email.value != "" &&
        form.contacto_descripcion.value != ""
    ) {
        if (validar.test(form.contacto_email.value)) {
            let formData = new FormData(form);
            ContactoDao.insert(formData).then(res => {
                console.log(res);
                if (res[0].toLowerCase() == "success") {
                    clearData();
                    showMsg("Tu mensaje ha sido enviado con éxito!");
                } else {
                    showMsg("Tenemos problemas al enviar tu mensaje!");
                }
            }).catch(res => {
                showMsg("Tenemos problemas al enviar tu mensaje!");
            })
        } else {
            showMsg("El Email ingresado no es valido!");
        }
    } else {
        showMsg("Debe llenar todos los campos!");
    }
}

const showMsg = (msg) => {
    let msg_element = document.getElementById('contacto_msg');
    msg_element.innerText = msg;
    setTimeout(() => {
        msg_element.innerText = "";
    }, 1000);
}

const clearData = () => {
    form.empresa_id.value = "";
    form.contacto_nombre.value = "";
    form.contacto_email.value = "";
    form.contacto_descripcion.value = "";
    form.contacto_nombre.focus();
}