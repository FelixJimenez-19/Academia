PromocionDao = {

    select: () => {
    return fetch(config.getUrl() + "model/script/promocion/select.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json')
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    selectById: (formData) => {
    return fetch(config.getUrl() + "model/script/promocion/selectById.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    insert: (formData) => {
    return fetch(config.getUrl() + "model/script/promocion/insert.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    update: (formData) => {
    return fetch(config.getUrl() + "model/script/promocion/update.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },          
                
    
    delete: (formData) => {
    return fetch(config.getUrl() + "model/script/promocion/delete.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    
    }
                
                            