                            
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/cobro.js
*/
// MAIN INI
const main = async () => {
    await entity.cobro.crud.select();
    await entity.selects.estudiante();
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
    entity.cobro.index = index;
    if (index !== null) {
    entity.view.form.cobro_id.value = entity.cobro.database[index].cobro_id;
                entity.view.form.cobro_mes.value = entity.cobro.database[index].cobro_mes;
    entity.view.form.cobro_pago.value = entity.cobro.database[index].cobro_pago;
    entity.view.form.estudiante_id.value = entity.cobro.database[index].estudiante_id;
    }
    entity.view.modalForm.style.top = '0%';
    },
    
    
    hideModalForm: () => {
    entity.cobro.index = null;
    entity.view.form.cobro_id.value = "";
                entity.view.form.cobro_mes.value = "";
    entity.view.form.cobro_pago.value = "";
    entity.view.form.estudiante_id.value = "";
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
    entity.cobro.index = null;
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
    <td>${ register.cobro_id }</td>
    <td>${ register.cobro_mes }</td>
    <td>${ register.cobro_pago }</td>
    <td>${ register.estudiante_nombre }</td>
    <td>
    <button onclick="entity.fun.showModalForm(${ index })"><img src="view/src/icon/edit.png"></button>
    <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.cobro.index = ${ index })">
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
    for (let i = 0; i < entity.cobro.database.length; i++) {
    if (
    textSearch === entity.cobro.database[i].cobro_id.substring(0, textSearch.length).toLowerCase()  ||
    textSearch === entity.cobro.database[i].cobro_mes.substring(0, textSearch.length).toLowerCase() ||
    textSearch === entity.cobro.database[i].cobro_pago.substring(0, textSearch.length).toLowerCase() ||
    textSearch === entity.cobro.database[i].estudiante_id.substring(0, textSearch.length).toLowerCase()
    ) {
    html += entity.fun.getHtmlTr(entity.cobro.database[i], i);
    }
    }
    entity.view.table.innerHTML = html;
    } else {
    entity.cobro.fun.select();
    }
    },
    
    },
    cobro: {
    database: [],
    index: null,
    fun: {
    
    select: () => {
    let html = "";
    for (let i = 0; i < entity.cobro.database.length; i++) {
    html += entity.fun.getHtmlTr(entity.cobro.database[i], i);
    }
    entity.view.table.innerHTML = html;
    },
    
    
    insertOrUpdate: () => {
    if (
                entity.view.form.cobro_mes.value !== "" &&
     entity.view.form.cobro_pago.value !== "" &&
     entity.view.form.estudiante_id.value !== ""
    ) {
    if (entity.cobro.index === null) {
    entity.cobro.crud.insert();
    } else {
    entity.cobro.crud.update();
    }
    } else {
    entity.fun.showModalMessage("Debe llenar todos los campos!");
    }
    },
    
    },
    crud: {
    select: async () => {
    await CobroDao.select().then(res => {
    entity.cobro.database = res;
    entity.cobro.fun.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    },
    insert: () => {
    CobroDao.insert(new FormData(entity.view.form)).then(res => {
    entity.cobro.crud.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    },
    update: () => {
    CobroDao.update(new FormData(entity.view.form)).then(res => {
    entity.cobro.crud.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    },
    delete: () => {
    let formData = new FormData();
    formData.append("cobro_id", entity.cobro.database[entity.cobro.index].cobro_id);
    CobroDao.delete(formData).then(res => {
    entity.cobro.crud.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    }
    }
    },
    
    selects: {
                
    estudiante: async () => {
    await EstudianteDao.select().then(res => {
    let html = `<option value="">ESTUDIANTE</option>`;
    for (let i = 0; i < res.length; i++) {
    html += `
    <option value="${ res[i].estudiante_id }">${ res[i].estudiante_nombre }</option>
    `;
    }
    entity.view.form.estudiante_id.innerHTML = html;
    });
    }
                    
    }
    
    }
    // EVENTS
    entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
    entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
    // MAIN CALL
    main();
                
   