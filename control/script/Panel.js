                            
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/panel.js
*/
window.onresize = () => {
    resposive_tool();
    }
    let resposive_tool = () => {
    if(window.innerWidth<=1000){
    document.getElementById("idea_input_check_header_tool").checked = true;
    }else{
    document.getElementById("idea_input_check_header_tool").checked = false;
    }
    }
    resposive_tool();
    let interface = {
    btn_logout: document.getElementById("idea_btn_logount")
    }
    let interactions = {
    logout: () => {
    CuentaDao.logout().then(res => {
    window.location.href = "login.php";
    });
    }
    }
    // EVENTS
    interface.btn_logout.onclick = () => interactions.logout();
                
                            