
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/servicio.js
*/
// MAIN INI
const main = async () => {
    await entity.servicio.crud.select();
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
            entity.servicio.index = index;
            if (index !== null) {
                entity.view.form.servicio.value = entity.servicio.database[index].servicio;
                entity.view.form.servicio_descripcion.value = entity.servicio.database[index].servicio_descripcion;
                // entity.view.form.servicio_file.value = entity.servicio.database[index].servicio_file;
                entity.view.form.servicio_estado.value = entity.servicio.database[index].servicio_estado;
                entity.view.form.empresa_id.value = entity.servicio.database[index].empresa_id;
            }
            entity.view.modalForm.style.top = '0%';
        },


        hideModalForm: () => {
            entity.servicio.index = null;
            entity.view.form.servicio.value = "";
            entity.view.form.servicio_descripcion.value = "";
            entity.view.form.servicio_file.value = "";
            entity.view.form.servicio_estado.value = "";
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
            entity.servicio.index = null;
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
            let registros = [];
            let n;
            if (register.servicio_estado == 1) {
                n = 'SI';
            } else {
                n='NO';
            }

            registros = `
    <tr>
    <td>${register.servicio}</td>
    <td>${register.servicio_descripcion}</td>
    <td><img src="${ register.servicio_file == null ? 'view/src/img/avatar.png' : register.servicio_file }" /></td>
    <td>${n}</td>

    <td>${register.empresa_nombre}</td>
    <td>
    <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
    <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.servicio.index = ${index})">
    <img src="view/src/icon/delete.png">
    </button>
    </td>
    </tr>
    `;
    return registros
        },


        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.servicio.database.length; i++) {
                    if (
                        textSearch === entity.servicio.database[i].servicio.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.servicio.database[i].servicio_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        
                        textSearch === entity.servicio.database[i].empresa_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.servicio.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.servicio.fun.select();
            }
        },
        toBase64: file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })

    },
    servicio: {
        database: [],
        index: null,
        fun: {

            select: () => {
                let html = "";
                for (let i = 0; i < entity.servicio.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.servicio.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },


            insertOrUpdate: () => {
                if (
                    entity.view.form.servicio_descripcion.value !== "" &&
                    entity.view.form.servicio_file.value !== "" &&
                    entity.view.form.servicio_estado.value !== "" &&
                    entity.view.form.empresa_id.value !== ""
                ) {
                    if (entity.servicio.index === null) {
                        entity.servicio.crud.insert();
                    } else {
                        entity.servicio.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },

        },
        crud: {
            select: async () => {
                await ServicioDao.select().then(res => {
                    entity.servicio.database = res;
                    entity.servicio.fun.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            insert: async () => {
                let formData = new FormData(entity.view.form);
                formData.append("servicio_file", await entity.fun.toBase64(entity.view.form.servicio_file.files[0]));
                ServicioDao.insert(formData).then(res => {
                    entity.servicio.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            update: async () => {
                let formData = new FormData(entity.view.form);
                formData.append("servicio_file", await entity.fun.toBase64(entity.view.form.servicio_file.files[0]));
                ServicioDao.update(formData).then(res => {
                    entity.servicio.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("servicio", entity.servicio.database[entity.servicio.index].servicio);
                ServicioDao.delete(formData).then(res => {
                    entity.servicio.crud.select();
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
    <option value="${res[i].empresa_id}">${res[i].empresa_nombre}</option>
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

