
const form = document.getElementById("idea_form_login");
let showMsg = (msg) => {
    document.getElementById("idea_msg").innerHTML = msg;
    setTimeout(() => {
        document.getElementById("idea_msg").innerHTML = "";
    }, 1000);
}
form.onsubmit = (evt) => {
    evt.preventDefault();

    if (form.cuenta_cedula.value !== "" && form.cuenta_pass.value !== "") {
        CuentaDao.login(new FormData(form)).then(res => {
            console.log(res);
            if (res[0] !== null) {

                window.location.href = "panel.php";
            } else {
                showMsg("Credenciales incorrectos");
            }
        });
    } else {
        showMsg("Debe ingresar sus credenciales");
    }
}

