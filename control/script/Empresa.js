/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/empresa.js
*/
// MAIN INI

const main = async () => {
    await entity.empresa.crud.select();

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
            entity.empresa.index = index;
            if (index !== null) {
                entity.view.form.empresa_id.value = entity.empresa.database[index].empresa_id;
                entity.view.form.empresa_nombre.value = entity.empresa.database[index].empresa_nombre;
                entity.view.form.empresa_vision.value = entity.empresa.database[index].empresa_vision;
                entity.view.form.empresa_mision.value = entity.empresa.database[index].empresa_mision;
                entity.view.form.empresa_ubicacion.value = entity.empresa.database[index].empresa_ubicacion;
                entity.view.form.empresa_mail.value = entity.empresa.database[index].empresa_mail;
                // entity.view.form.empresa_logo.value = entity.empresa.database[index].empresa_logo;
                entity.view.form.empresa_map.value = entity.empresa.database[index].empresa_map;
                entity.view.form.empresa_descripcion.value = entity.empresa.database[index].empresa_descripcion;
            }
            entity.view.modalForm.style.top = '0%';
        },


        hideModalForm: () => {
            entity.empresa.index = null;
            entity.view.form.empresa_id.value = "";
            entity.view.form.empresa_nombre.value = "";
            entity.view.form.empresa_vision.value = "";
            entity.view.form.empresa_mision.value = "";
            entity.view.form.empresa_ubicacion.value = "";
            entity.view.form.empresa_mail.value = "";
            entity.view.form.empresa_logo.value = "";
            entity.view.form.empresa_map.value = "";
            entity.view.form.empresa_descripcion.value = "";
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
            entity.empresa.index = null;
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
                    <td>${ register.empresa_id }</td>
                    <td>${ register.empresa_nombre }</td>
                    <td>${ register.empresa_vision }</td>
                    <td>${ register.empresa_mision }</td>
                    <td>${ register.empresa_ubicacion }</td>
                    <td>${ register.empresa_mail }</td>
                    <td><img src="${ register.empresa_logo == null ? 'view/src/img/avatar.png' : register.empresa_logo }" /></td>
                    <td>${ register.empresa_map }</td>
                    <td>${ register.empresa_descripcion }</td>
                    <td>
                        <button onclick="entity.fun.showModalForm(${ index })" >
                            <img src="view/src/icon/edit.png">
                        </button>
                        <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.empresa.index = ${ index })">
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
                for (let i = 0; i < entity.empresa.database.length; i++) {
                    if (
                        textSearch === entity.empresa.database[i].empresa_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.empresa.database[i].empresa_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.empresa.database[i].empresa_vision.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.empresa.database[i].empresa_mision.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.empresa.database[i].empresa_ubicacion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.empresa.database[i].empresa_mail.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.empresa.database[i].empresa_map.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.empresa.database[i].empresa_descripcion.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.empresa.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.empresa.fun.select();
            }
        },
        toBase64: file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })
    },
    empresa: {
        database: [],
        index: null,
        fun: {

            select: () => {
                let html = "";
                for (let i = 0; i < entity.empresa.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.empresa.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },


            insertOrUpdate: () => {
                if (
                    entity.view.form.empresa_nombre.value !== "" &&
                    entity.view.form.empresa_vision.value !== "" &&
                    entity.view.form.empresa_mision.value !== "" &&
                    entity.view.form.empresa_ubicacion.value !== "" &&
                    entity.view.form.empresa_mail.value !== "" &&
                    //  entity.view.form.empresa_logo.value !== "" &&
                    entity.view.form.empresa_map.value !== "" &&
                    entity.view.form.empresa_descripcion.value !== ""
                ) {
                    let validar = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if (validar.test(entity.view.form.empresa_mail.value)) {
                        if (entity.empresa.index === null) {
                            entity.empresa.crud.insert();
                        } else {
                            entity.empresa.crud.update();
                        }
                    } else {
                        entity.fun.showModalMessage("La dirección de email no valida.");
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },

        },
        crud: {
            select: async () => {
                await EmpresaDao.select().then(res => {
                    entity.empresa.database = res;
                    entity.empresa.fun.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            insert: async () => {
                let formData = new FormData(entity.view.form);
                formData.append("empresa_logo", await entity.fun.toBase64(entity.view.form.empresa_logo.files[0]));
                EmpresaDao.insert(formData).then(res => {
                    entity.empresa.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            update: async() => {
                let formData = new FormData(entity.view.form);
                formData.append("empresa_logo", await entity.fun.toBase64(entity.view.form.empresa_logo.files[0]));
                EmpresaDao.update(formData).then(res => {
                    entity.empresa.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("empresa_id", entity.empresa.database[entity.empresa.index].empresa_id);
                EmpresaDao.delete(formData).then(res => {
                    entity.empresa.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            }
        }
    },

    selects: {

    }

}
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();