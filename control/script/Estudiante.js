// MAIN INI
const main = async () => {
    await entity.estudiante.crud.select();
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
            entity.estudiante.index = index;
            if (index !== null) {
                entity.view.form.estudiante_id.value = entity.estudiante.database[index].estudiante_id;
                entity.view.form.estudiante_nombre.value = entity.estudiante.database[index].estudiante_nombre;
                entity.view.form.estudiante_apellido.value = entity.estudiante.database[index].estudiante_apellido;
                entity.view.form.estudiante_activo.value = entity.estudiante.database[index].estudiante_activo;
                entity.view.form.estudiante_cedula.value = entity.estudiante.database[index].estudiante_cedula;
                entity.view.form.estudiante_email.value = entity.estudiante.database[index].estudiante_email;
                entity.view.form.estudiante_movil.value = entity.estudiante.database[index].estudiante_movil;
                entity.view.form.empresa_id.value = entity.estudiante.database[index].empresa_id;
            }
            entity.view.modalForm.style.top = '0%';
        },


        hideModalForm: () => {
            entity.estudiante.index = null;
            entity.view.form.estudiante_id.value = "";
            entity.view.form.estudiante_nombre.value = "";
            entity.view.form.estudiante_apellido.value = "";
            entity.view.form.estudiante_activo.value = "";
            entity.view.form.estudiante_cedula.value = "";
            entity.view.form.estudiante_email.value = "";
            entity.view.form.estudiante_movil.value = "";
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
            entity.estudiante.index = null;
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
            if (register.estudiante_activo == 1) {
                n = 'si';

            } else {
                n = 'no';
            }
            registros = `
            <tr>
            <td>${register.estudiante_id}</td>
            <td>${register.estudiante_nombre}</td>
            <td>${register.estudiante_apellido}</td>
            <td>${register.estudiante_fecha_inscripcion}</td>
            <td> ${n} </td>
            <td>${register.estudiante_cedula}</td>
            <td>${register.estudiante_email}</td>
            <td>${register.estudiante_movil}</td>
            <td>${register.empresa_nombre}</td>
            <td>
            <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
            <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.estudiante.index = ${index})">
            <img src="view/src/icon/delete.png">
            </button>
            </td>
            </tr>
            `
            return registros;
        },




        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.estudiante.database.length; i++) {
                    if (
                        textSearch === entity.estudiante.database[i].estudiante_nombre.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.estudiante.database[i].estudiante_apellido.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.estudiante.database[i].estudiante_cedula.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.estudiante.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.estudiante.fun.select();
            }
        },

    },
    estudiante: {

        isCedula: (num) => {
            if (num.length == 10) {
                let sum = 0;
                let cedula = num.split("");
                for (let i = 0; i < cedula.length; i++) {
                    let temp = parseInt(cedula[i]);
                    if (i % 2 == 0) {
                        if (temp * 2 > 9) {
                            sum += (temp * 2) - 9;
                        } else {
                            sum += temp * 2;
                        }
                    } else {
                        sum += temp;
                    }
                }
                if (sum % 10 == 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
        duplicateCedula: async (cedula) => {
            let cont = 0;
            await EstudianteDao.select().then(res => {
                for (let i in res) {
                    if (res[i].estudiante_cedula === cedula) {
                        cont += 1;
                    }
                }
            });

            console.log(cont);
            if (cont === 0) {
                return true;
            } else {
                entity.fun.showModalMessage("Nro De Cedula ya registrada");
                return false;
            }
        },

        database: [],
        index: null,
        fun: {
            select: () => {

                let html = "";
                for (let i = 0; i < entity.estudiante.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.estudiante.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },
            insertOrUpdate: async () => {
                if (
                    entity.view.form.estudiante_nombre.value !== "" &&
                    entity.view.form.estudiante_apellido.value !== "" &&
                    entity.view.form.estudiante_activo.value !== "" &&
                    entity.view.form.estudiante_cedula.value !== "" &&
                    entity.view.form.estudiante_email.value !== "" &&
                    entity.view.form.estudiante_movil.value !== "" &&
                    entity.view.form.empresa_id.value !== ""
                ) {
                    // variable para validar email
                    let validar = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    // validar email en esta linea
                    if (validar.test(entity.view.form.estudiante_email.value)) {
                        // validamos cedula valida
                        if (entity.estudiante.isCedula(entity.view.form.estudiante_cedula.value) === true) {
                            if (entity.estudiante.index === null) {
                                console.log(entity.estudiante.index);
                                if (await entity.estudiante.duplicateCedula(entity.view.form.estudiante_cedula.value) === true) {
                                    entity.estudiante.crud.insert();
                                }
                            } else {
                                console.log("vamos por actualizar");
                                entity.estudiante.crud.update();
                            }
                        } else {
                            entity.fun.showModalMessage("Nro De Cedula No Valida");
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
                await EstudianteDao.select().then(res => {
                    entity.estudiante.database = res;
                    entity.estudiante.fun.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            insert: () => {
                EstudianteDao.insert(new FormData(entity.view.form)).then(res => {
                    entity.estudiante.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            update: () => {
                // console.log(entity.view.form.estudiante_id.value);
                // console.log(entity.view.form.estudiante_nombre.value);
                // console.log(entity.view.form.estudiante_apellido.value);
                // console.log(entity.view.form.estudiante_activo.value);
                // console.log(entity.view.form.estudiante_cedula.value);
                // console.log(entity.view.form.estudiante_email.value);
                // console.log(entity.view.form.estudiante_movil.value);
                // console.log(entity.view.form.empresa_id.value);
                EstudianteDao.update(new FormData(entity.view.form)).then(res => {
                    console.log(res);
                    entity.estudiante.crud.select();
                    entity.fun.hideModalForm();
                }).catch(res => {
                    entity.fun.showModalMessage("Problemas al conectar con el servidor");
                });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("estudiante_id", entity.estudiante.database[entity.estudiante.index].estudiante_id);
                EstudianteDao.delete(formData).then(res => {
                    entity.estudiante.crud.select();
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