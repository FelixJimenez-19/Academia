
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/horario.js
*/
// MAIN INI
const main = async () => {
    await entity.horario.crud.select();
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
            entity.horario.index = index;
            if (index !== null) {
                entity.view.form.horario_id.value = entity.horario.database[index].horario_id;
                entity.view.form.horario_dia.value = entity.horario.database[index].horario_dia;
                entity.view.form.horario_inicio.value = entity.horario.database[index].horario_inicio;
                entity.view.form.horario_fin.value = entity.horario.database[index].horario_fin;
                entity.view.form.empresa_id.value = entity.horario.database[index].empresa_id;
            }
            entity.view.modalForm.style.top = '0%';
        },


        hideModalForm: () => {
            entity.horario.index = null;
            entity.view.form.horario_id.value = "";
            entity.view.form.horario_dia.value = "";
            entity.view.form.horario_inicio.value = "";
            entity.view.form.horario_fin.value = "";
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
            entity.horario.index = null;
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
    <td>${register.horario_id}</td>
    <td>${register.horario_dia}</td>
    <td>${register.horario_inicio}</td>
    <td>${register.horario_fin}</td>
    <td>${register.empresa_nombre}</td>
    <td>
    <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
    <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.horario.index = ${index})">
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
                for (let i = 0; i < entity.horario.database.length; i++) {
                    if (
                        textSearch === entity.horario.database[i].horario_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.horario.database[i].horario_dia.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.horario.database[i].horario_inicio.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.horario.database[i].horario_fin.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.horario.database[i].empresa_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.horario.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.horario.fun.select();
            }
        },

    },
    horario: {
        database: [],
        index: null,
        fun: {

            select: () => {
                let html = "";
                for (let i = 0; i < entity.horario.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.horario.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },


            insertOrUpdate: () => {
                if (
                    entity.view.form.horario_dia.value !== "" &&
                    entity.view.form.horario_inicio.value !== "" &&
                    entity.view.form.horario_fin.value !== "" &&
                    entity.view.form.empresa_id.value !== ""
                ) {
                    if (entity.horario.index === null) {
                        entity.horario.crud.insert();
                    } else {
                        entity.horario.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },

        },
        crud: {
            select: async () => {
                await HorarioDao.select().then(res => {
                    entity.horario.database = res;
                    entity.horario.fun.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            insert: () => {
                HorarioDao.insert(new FormData(entity.view.form)).then(res => {
                    entity.horario.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            update: () => {
                HorarioDao.update(new FormData(entity.view.form)).then(res => {
                    entity.horario.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("horario_id", entity.horario.database[entity.horario.index].horario_id);
                HorarioDao.delete(formData).then(res => {
                    entity.horario.crud.select();
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

