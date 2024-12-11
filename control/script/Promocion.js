
const main = async () => {
    await entity.promocion.crud.select();
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
            entity.promocion.index = index;
            if (index !== null) {
                entity.view.form.promocion_id.value = entity.promocion.database[index].promocion_id;
                entity.view.form.promocion_descripcion.value = entity.promocion.database[index].promocion_descripcion;
                // entity.view.form.promocion_img.value = entity.promocion.database[index].promocion_img;
                entity.view.form.promocion_estado.value = entity.promocion.database[index].promocion_estado;
                entity.view.form.empresa_id.value = entity.promocion.database[index].empresa_id;
            }
            entity.view.modalForm.style.top = '0%';
        },


        hideModalForm: () => {
            entity.promocion.index = null;
            entity.view.form.promocion_id.value = "";
            entity.view.form.promocion_descripcion.value = "";
            entity.view.form.promocion_img.value = "";
            entity.view.form.promocion_estado.value = "";
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
            entity.promocion.index = null;
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
            if (register.promocion_estado == 1) {
                n = "SI";
            } else {
                n = "NO";
            }
            registros = `
    <tr>
    <td>${register.promocion_id}</td>
    <td>${register.promocion_descripcion}</td>
    <td><img src="${ register.promocion_img == null ? 'view/src/img/avatar.png' : register.promocion_img }" /></td>
    <td>${n}</td>

    <td>${register.empresa_nombre}</td>
    <td>
    <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
    <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.promocion.index = ${index})">
    <img src="view/src/icon/delete.png">
    </button>
    </td>
    </tr>
    `;
            return registros;
        },


        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.promocion.database.length; i++) {
                    if (
                        textSearch === entity.promocion.database[i].promocion_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.promocion.database[i].promocion_descripcion.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.promocion.database[i].promocion_img.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.promocion.database[i].empresa_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.promocion.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.promocion.fun.select();
            }
        },
        toBase64: file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })

    },
    promocion: {
        database: [],
        index: null,
        fun: {

            select: () => {
                let html = "";
                for (let i = 0; i < entity.promocion.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.promocion.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },


            insertOrUpdate: () => {
                if (
                    entity.view.form.promocion_descripcion.value !== "" &&
                    entity.view.form.promocion_img.value !== "" &&
                    entity.view.form.promocion_estado.value !== "" &&
                    entity.view.form.empresa_id.value !== ""
                ) {
                    if (entity.promocion.index === null) {
                        entity.promocion.crud.insert();
                    } else {
                        entity.promocion.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },

        },
        crud: {
            select: async () => {
                await PromocionDao.select().then(res => {
                    entity.promocion.database = res;
                    entity.promocion.fun.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            insert: async() => {
                let formData = new FormData(entity.view.form);
                formData.append("promocion_img", await entity.fun.toBase64(entity.view.form.promocion_img.files[0]));
                PromocionDao.insert(formData).then(res => {
                    entity.promocion.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            update: async() => {
                let formData = new FormData(entity.view.form);
                formData.append("promocion_img", await entity.fun.toBase64(entity.view.form.promocion_img.files[0]));
                PromocionDao.update(formData).then(res => {
                    entity.promocion.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("promocion_id", entity.promocion.database[entity.promocion.index].promocion_id);
                PromocionDao.delete(formData).then(res => {
                    entity.promocion.crud.select();
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

