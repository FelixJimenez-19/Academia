                            
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/CuentaDao.js
*/
CuentaDao = {

    select: () => {
    return fetch(config.getUrl() + "model/script/cuenta/select.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json')
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    selectById: (formData) => {
    return fetch(config.getUrl() + "model/script/cuenta/selectById.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    insert: (formData) => {
    return fetch(config.getUrl() + "model/script/cuenta/insert.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    update: (formData) => {
    return fetch(config.getUrl() + "model/script/cuenta/update.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },          
                
    
    delete: (formData) => {
    return fetch(config.getUrl() + "model/script/cuenta/delete.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    login: (formData) => {
    return fetch(config.getUrl() + "model/script/cuenta/login.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    logout: () => {
    return fetch(config.getUrl() + "model/script/cuenta/logout.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json')
    }).then(res => res.json()).then(res => {
    return res;
    });
    }
                    
    }
                
                            