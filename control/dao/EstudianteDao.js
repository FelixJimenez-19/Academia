                            
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/EstudianteDao.js
*/
EstudianteDao = {

    select: () => {
    return fetch(config.getUrl() + "model/script/estudiante/select.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json')
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    selectById: (formData) => {
    return fetch(config.getUrl() + "model/script/estudiante/selectById.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    insert: (formData) => {
    return fetch(config.getUrl() + "model/script/estudiante/insert.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    update: (formData) => {
    return fetch(config.getUrl() + "model/script/estudiante/update.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },          
                
    
    delete: (formData) => {
    return fetch(config.getUrl() + "model/script/estudiante/delete.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    
    }
                
                            