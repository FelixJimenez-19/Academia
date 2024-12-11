
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/social.js
*/
// MAIN INI
const main = async () => {
    await entity.social.crud.select();
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
            entity.social.index = index;
            if (index !== null) {
                entity.view.form.social_id.value = entity.social.database[index].social_id;
                entity.view.form.social_descripcion.value = entity.social.database[index].social_descripcion;
                entity.view.form.social_link.value = entity.social.database[index].social_link;
                // entity.view.form.social_logo.value = entity.social.database[index].social_logo;
                entity.view.form.empresa_id.value = entity.social.database[index].empresa_id;
            }
            entity.view.modalForm.style.top = '0%';
        },


        hideModalForm: () => {
            entity.social.index = null;
            entity.view.form.social_id.value = "";
            entity.view.form.social_descripcion.value = "";
            entity.view.form.social_link.value = "";
            entity.view.form.social_logo.value = "";
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
            entity.social.index = null;
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
    <td>${register.social_id}</td>
    <td>${register.social_descripcion}</td>
    <td>${register.social_link}</td>
    <td><img src="${ register.social_logo == null ? 'view/src/img/avatar.png' : register.social_logo }" /></td>
    <td>${register.empresa_nombre}</td>
    <td>
    <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
    <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.social.index = ${index})">
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
                for (let i = 0; i < entity.social.database.length; i++) {
                    if (
                        textSearch === entity.social.database[i].social_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.social.database[i].social_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.social.database[i].social_link.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.social.database[i].social_logo.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.social.database[i].empresa_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.social.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.social.fun.select();
            }
        },
        toBase64: file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })
    },
    social: {
        database: [],
        index: null,
        fun: {

            select: () => {
                let html = "";
                for (let i = 0; i < entity.social.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.social.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },


            insertOrUpdate: () => {
                if (
                    entity.view.form.social_descripcion.value !== "" &&
                    entity.view.form.social_link.value !== "" &&
                    entity.view.form.social_logo.value !== "" &&
                    entity.view.form.empresa_id.value !== ""
                ) {
                    if (entity.social.index === null) {
                        entity.social.crud.insert();
                    } else {
                        entity.social.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },

        },
        crud: {
            select: async () => {
                await SocialDao.select().then(res => {
                    entity.social.database = res;
                    entity.social.fun.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            insert: async() => {
                let formData = new FormData(entity.view.form);
                formData.append("social_logo", await entity.fun.toBase64(entity.view.form.social_logo.files[0]));
                SocialDao.insert(formData).then(res => {
                    entity.social.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            update: async() => {
                let formData = new FormData(entity.view.form);
                formData.append("social_logo", await entity.fun.toBase64(entity.view.form.social_logo.files[0]));
                SocialDao.update(formData).then(res => {
                    entity.social.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("social_id", entity.social.database[entity.social.index].social_id);
                SocialDao.delete(formData).then(res => {
                    entity.social.crud.select();
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

