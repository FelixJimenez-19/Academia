                            
const main = async () => {
    await entity.cuenta.crud.select();
    await entity.selects.empresa();
    }
    // MASTER OBJECT INI
    const entity = {
    view: {
    table: document.getElementById("idea_table"),
    modalForm: document.getElementById("idea_modal_form"),
    form: document.getElementById("idea_form"),
    modalMessage: document.getElementById("idea_modal_message"),
    message: document.getElementById("idea_message"),
    modalConfirm: document.getElementById("idea_modal_confirm"),
    confirm: document.getElementById("idea_confirm"),
    search: document.getElementById("idea_search")
    },
    fun: {
    
    showModalForm: (index) => {
    entity.cuenta.index = index;
    if (index !== null) {
    entity.view.form.cuenta_id.value = entity.cuenta.database[index].cuenta_id;
                entity.view.form.cuenta_cedula.value = entity.cuenta.database[index].cuenta_cedula;
    entity.view.form.cuenta_nombre.value = entity.cuenta.database[index].cuenta_nombre;
    entity.view.form.cuenta_pass.value = entity.cuenta.database[index].cuenta_pass;
    entity.view.form.empresa_id.value = entity.cuenta.database[index].empresa_id;
    }
    entity.view.modalForm.style.top = '0%';
    },
    
    
    hideModalForm: () => {
    entity.cuenta.index = null;
    entity.view.form.cuenta_id.value = "";
                entity.view.form.cuenta_cedula.value = "";
    entity.view.form.cuenta_nombre.value = "";
    entity.view.form.cuenta_pass.value = "";
    entity.view.form.empresa_id.value = "";
    entity.view.modalForm.style.top = '-100%';
    },
    
    showModalMessage: (msg) => {
    entity.view.modalMessage.style.top = '0%';
    entity.view.message.innerHTML = msg;
    },
    hideModalMessage: () => {
    entity.view.modalMessage.style.top = '-100%';
    entity.view.message.innerHTML = '';
    },
    showModalConfirm: (msg, action) => {
    entity.view.modalConfirm.style.top = '0%';
    entity.view.confirm.innerHTML = msg;
    action();
    },
    hideModalConfirm: () => {
    entity.cuenta.index = null;
    entity.view.modalConfirm.style.top = '-100%';
    entity.view.confirm.innerHTML = '';
    },
    pressYesModalConfirm: (action) => {
    action();
    entity.fun.hideModalConfirm();
    },
    submitForm: (evt) => {
    evt.preventDefault();
    },
    
    getHtmlTr: (register, index) => {
    return `
    <tr>
    <td>${ register.cuenta_id }</td>
    <td>${ register.cuenta_cedula }</td>
    <td>${ register.cuenta_nombre }</td>
    <td>${ register.empresa_nombre }</td>
    <td><img src="${ 
    (register.cuenta_foto !== null) ?
    'view/src/files/cuenta_foto/' + register.cuenta_foto :
    'view/src/img/avatar.png'
    }"/></td>
                                
    <td>
    <button onclick="entity.fun.showModalForm(${ index })"><img src="view/src/icon/edit.png"></button>
    <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.cuenta.index = ${ index })">
    <img src="view/src/icon/delete.png">
    </button>
    </td>
    </tr>
    `;
    },
    
    
    search: (evt) => {
    let textSearch = evt.srcElement.value.toLowerCase();
    if (textSearch !== "") {
    let html = "";
    for (let i = 0; i < entity.cuenta.database.length; i++) {
    if (
    textSearch === entity.cuenta.database[i].cuenta_id.substring(0, textSearch.length).toLowerCase()  ||
    textSearch === entity.cuenta.database[i].cuenta_cedula.substring(0, textSearch.length).toLowerCase() ||
    textSearch === entity.cuenta.database[i].cuenta_nombre.substring(0, textSearch.length).toLowerCase() ||
    textSearch === entity.cuenta.database[i].cuenta_pass.substring(0, textSearch.length).toLowerCase() ||
    textSearch === entity.cuenta.database[i].empresa_id.substring(0, textSearch.length).toLowerCase()
    ) {
    html += entity.fun.getHtmlTr(entity.cuenta.database[i], i);
    }
    }
    entity.view.table.innerHTML = html;
    } else {
    entity.cuenta.fun.select();
    }
    },
    
    },
    cuenta: {
    database: [],
    index: null,
    fun: {
    
    select: () => {
    let html = "";
    for (let i = 0; i < entity.cuenta.database.length; i++) {
    html += entity.fun.getHtmlTr(entity.cuenta.database[i], i);
    }
    entity.view.table.innerHTML = html;
    },
    
    
    insertOrUpdate: () => {
    if (
    entity.view.form.cuenta_cedula.value !== "" &&
     entity.view.form.cuenta_nombre.value !== "" &&
     entity.view.form.cuenta_pass.value !== "" &&
     entity.view.form.empresa_id.value !== ""
    ) {
    if (entity.cuenta.index === null) {
    entity.cuenta.crud.insert();
    } else {
    entity.cuenta.crud.update();
    }
    } else {
    entity.fun.showModalMessage("Debe llenar todos los campos!");
    }
    },
    
    },
    crud: {
    select: async () => {
    await CuentaDao.select().then(res => {
    entity.cuenta.database = res;
    entity.cuenta.fun.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    },
    insert: () => {
    CuentaDao.insert(new FormData(entity.view.form)).then(res => {
    entity.cuenta.crud.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    },
    update: () => {
    CuentaDao.update(new FormData(entity.view.form)).then(res => {
    entity.cuenta.crud.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    },
    delete: () => {
    let formData = new FormData();
    formData.append("cuenta_id", entity.cuenta.database[entity.cuenta.index].cuenta_id);
    CuentaDao.delete(formData).then(res => {
    entity.cuenta.crud.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    }
    }
    },
    
    selects: {
                
    empresa: async () => {
    await EmpresaDao.select().then(res => {
    let html = `<option value="">EMPRESA</option>`;
    for (let i = 0; i < res.length; i++) {
    html += `
    <option value="${ res[i].empresa_id }">${ res[i].empresa_nombre }</option>
    `;
    }
    entity.view.form.empresa_id.innerHTML = html;
    });
    }
                    
    }
    
    }
    // EVENTS
    entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
    entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
    // MAIN CALL
    main();
                
                            